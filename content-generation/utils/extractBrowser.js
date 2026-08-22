import { chromium } from 'playwright';


const extractBrowser = async (query) => {
    let YOUR_API_KEY = '3207a4a15419af6360b2f60cb700252d89cdd6d2'
    let searchQuery = `
    
${query} phone specifications and details`

    let searchQuery1 = `
    
${query} phone specifications and details
(
OR site:gsmarena.com
OR site:gadgets.beebom.com
OR site:versus.com
OR site:notebookcheck.net
OR site:kimovil.com
OR site:devicespecifications.com
OR site:nanorreview.net
OR site:91mobiles.com
OR site:smartprix.com
OR site:phonebunch.com
OR site:techradar.com
OR site:androidauthority.com
OR site:xda-developers.com
OR site:trustedreviews.com
OR site:tomsguide.com
OR site:androidcentral.com
OR site:digitaltrends.com
OR site:pcmag.com
OR site:theverge.com
OR site:gadgets360.com
OR site:mysmartprice.com
OR site:fonearena.com
OR site:phoneplacekenya.com
OR site:phonearena.com
)
    `;
    try {
        let links = [];
        try {
            const response = await fetch("https://google.serper.dev/search", {
                method: "POST",
                headers: {
                    "X-API-KEY": YOUR_API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: searchQuery,
                    page: 1,
                    num: 20
                })
            });

            const data = await response.json();

            const organic = data.organic || [];

            links = organic
                .filter(o =>
                    !o.link.startsWith("https://www.youtube.com/") &&
                    !o.link.startsWith("https://www.amazon.com/")
                )
                .map(o => ({
                    id: o.position,
                    link: o.link
                }));
        } catch (error) {
            console.log(`Error in fetching search links`, error)
        }

        const scrapedResult = [];

        const browser = await chromium.launch({
            headless: true
        })
        const context = await browser.newContext();
        for (let link of links) {
            const page = await context.newPage();
            try {
                await page.goto(link.link, {
                    waitUntil: "domcontentloaded",
                    timeout: 30000,
                });

                const pageData = await page.evaluate((url) => {

                    const remove = document.querySelectorAll(
                        "script,style,noscript,nav,footer,iframe"
                    );
                    remove.forEach(el => el.remove());

                    let text = "";

                    if (url.includes("gsmarena.com")) {
                        text = document.querySelector("#specs-list")?.innerText || "";
                    }
                    else if (url.includes("versus.com")) {
                        text = document.querySelector("#record")?.innerText || "";
                    }
                    else if (url.includes("whatmobile.com.pk")) {
                        text = document.querySelector(".specs")?.innerText || "";
                    }
                    else if (url.includes("91mobiles.com")) {
                        text = document.querySelector("#ProductPage-specs")?.innerText || "";
                    }
                    else if (url.includes("phonearena.com")) {
                        text = document.querySelector(".phone__section_widget_specs")?.innerText || "";
                    }
                    else if (url.includes("devicespecifications.com")) {
                        text = [...document.querySelectorAll(".model-information-table .row-selection")]
                            .map(e => e.innerText)
                            .join("\n");
                    }
                    else if (url.includes("notebookcheck.net")) {
                        text = document.querySelector(".specs_whole")?.innerText || "";
                    }
                    else if (url.includes("gadgets.beebom.com")) {
                        text = document.querySelector(".specification-details")?.innerText || "";
                    }
                    else {
                        text = document.body?.innerText || "";
                    }

                    return {
                        title: document.title,
                        content: text.replace(/\s+/g, " ").trim(),
                    };

                }, link.link);

                scrapedResult.push({
                    title: pageData.title,
                    content: pageData.content,
                    url: link.link
                })

            } catch (error) {
                console.error(`Failed to scrape ${link.link}: ${error.message}`);
            } finally {
                await page.close()
            }
        }
        await browser.close()
        return scrapedResult;
    } catch (error) {
        console.log(`Error in Extracting browser.`, error)
    }
}
export default extractBrowser;