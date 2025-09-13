const cheerio = require("cheerio");
const puppeteer = require("puppeteer-extra");
const router = require("express").Router();
const tr = require("tor-request");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");
const cron = require("node-cron");
tr.TorControlPort.password = "S3cr3tGuy";
tr.setTorAddress("127.0.0.1", 9051);
const TOR_PROXY = "socks5://127.0.0.1:9050";
puppeteer.use(stealthPlugin());

// async function rotateTorIp() {
//   return new Promise((resolve, reject) => {
//     tr.newTorSession((err) => {
//       if (err) return reject(err);
//       console.log("🔄 Requested new Tor IP");
//       resolve();
//     });
//   });
// }
async function rotateTorIp() {
  return new Promise((resolve, reject) => {
    tr.newTorSession((err) => {
      if (err) {
        console.error("Tor IP rotation failed:", err);
        return reject(err);
      }
      console.log("🔄 Requested new Tor IP");
      resolve();
    });
  });
}

// Test function
async function testTorConnection() {
  try {
    await rotateTorIp();
    console.log("✅ Tor IP rotation successful");
  } catch (error) {
    console.error("❌ Tor connection failed:", error.message);
    console.log("Please ensure:");
    console.log("1. Tor Browser is running and connected");
    console.log("2. Control port 9151 is enabled in torrc");
    console.log("3. No firewall is blocking the connection");
  }
}

// Run test
testTorConnection();
router.get("/", async (req, res) => {
  await rotateTorIp();
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--proxy-server=${TOR_PROXY}`, "--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117 Safari/537.36",
  ];

  await page.setUserAgent(userAgents[Math.floor(Math.random() * userAgents.length)]);
  await page.setRequestInterception(true);

  const client = await page.target().createCDPSession();
  await client.send("Network.clearBrowserCookies");
  await client.send("Network.clearBrowserCache");

  page.on("request", (req) => {
    const type = req.resourceType();
    if (["image", "stylesheet", "font"].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto("https://pk.indeed.com/jobs?q=software+developer", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("div.job_seen_beacon, div.cardOutline h2.jobTitle");
  const element = await page.$("div.cardOutline, div.job_seen_beacon");

  await element.click();
  await page.waitForSelector(".jobsearch-JobComponent");

  const jobDetail = await page.$eval(".jobsearch-JobComponent", (el) => {
    return {
      title: el.querySelector("h2.jobsearch-JobInfoHeader-title span ").innerText.replace(" - job post", "") || "",
      companyName: el.querySelector("div [data-company-name] span a  ").innerText || "",
      companyLocation: el.querySelector("div [data-testid='inlineHeader-companyLocation'] div ").innerText || "",
      salary: el.querySelector("div#salaryInfoAndJobType span").innerText || "",
      description: el.querySelector("div#jobDescriptionText").innerHTML || "",
    };
  });

  await browser.close();

  res.json(jobDetail);
});
cron.schedule("0 */6 * * *", () => {
  //   fetchJobs();
});
module.exports = router;
