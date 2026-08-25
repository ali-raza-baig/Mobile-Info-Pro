
const brand_logo_prompt = ({ brandName }) => {
  return `
  Create a clean, premium logo image for the mobile phone brand ${brandName}.

Requirements:
- Use the official brand logo only.
- Preserve the logo exactly as designed. Do not redesign, recolor, distort, stretch, rotate, or add effects.
- Center the logo perfectly.
- Scale the logo so it fills approximately 90–95% of the canvas while maintaining its original aspect ratio.
- Keep only a small, equal padding (2–3%) on all sides to avoid excessive whitespace.
- Ensure every generated logo has the same visual size and alignment, regardless of the brand.
- Use a transparent background.
- No gradients.
- No shadows.
- No glow.
- No borders.
- No textures.
- No patterns.
- No decorative elements.
- No additional text, taglines, watermarks, or icons.
- Keep the edges sharp and crisp with high-quality anti-aliasing.
- Optimize the composition specifically for square logo cards on a modern technology website.

Output:
- Width: 512 px
- Height: 512 px
- Aspect Ratio: 1:1
- PNG
- transparent background
- High resolution
- Suitable for display inside a 120×120 px website card
    `
}

const brand_hero_prompt = ({ BRAND }) => {
  return `
    You are an expert smartphone technology writer creating SEO content for a premium mobile specifications website MobileInfoPro (http://mobileinfopro.com) similar to GSMArena, PhoneArena, Kimovil, and NanoReview.

Brand Name:
${BRAND}

Your task is to generate the Hero section content for the brand page.

The audience includes:

• Buyers researching smartphones
• Users comparing phones
• Technology enthusiasts
• Search engine visitors

----------------------------------------------------
WRITING REQUIREMENTS
----------------------------------------------------

Write naturally.

Do NOT sound like an advertisement.

Do NOT exaggerate.

Do NOT use clickbait.

Do NOT use emojis.

Do NOT mention this prompt.

Use simple English.

Use active voice.

Use short readable sentences.

Write in a professional technology journalism style.

----------------------------------------------------
DESCRIPTION REQUIREMENTS
----------------------------------------------------

Write exactly ONE paragraph.

Length:
50–70 words.

The paragraph should explain:

• what the brand is known for
• its smartphone lineup
• flagship series
• budget or mid-range series
• software experience
• why users choose this brand

Naturally include SEO keywords such as:

"${BRAND} phones"

"${BRAND} smartphones"

"${BRAND} mobile phones"

"${BRAND} specifications"

"${BRAND} price"

"${BRAND} models"

Do NOT keyword stuff.

----------------------------------------------------
TITLE
----------------------------------------------------

Return:

"${BRAND}"

----------------------------------------------------
STATS
----------------------------------------------------

Estimate realistic values.

activeModels:
Approximate number of smartphones that are currently relevant.

averageRating:
Between 4.5 and 4.9

aiReviews:
Always true

----------------------------------------------------
OUTPUT
----------------------------------------------------

Return ONLY valid JSON.

{
  "title":"",
  "subtitle":"Smartphones",
  "description":"",
  "stats":{
      "activeModels":0,
      "averageRating":0,
      "aiReviews":true
  }
}

Return nothing except JSON.

    `
}

const brand_about_prompt = ({ BRAND }) => {
  return `
    You are an experienced technology editor writing factual brand information for a premium smartphone specification website.

Brand:
${BRAND}

Create the About section.

----------------------------------------------------
GOAL
----------------------------------------------------

Help visitors understand the smartphone brand before browsing its devices.

The content should answer:

Who is this brand?

Why is it popular?

What kinds of phones does it make?

What software does it use?

Where is the company based?

----------------------------------------------------
WRITING STYLE
----------------------------------------------------

Professional

Neutral

SEO optimized

Easy to read

Informative

No marketing language.

No hype.

No emojis.

No bullet points.

No headings.

----------------------------------------------------
DESCRIPTION
----------------------------------------------------

Write ONE paragraph.

Length:
70–110 words.

Include naturally:

• company background

• founding history

• headquarters

• smartphone reputation

• innovation

• software ecosystem

• notable technologies

• flagship smartphone lineup

• mid-range lineup

• budget lineup

• target users

• worldwide availability

Naturally include these SEO keywords:

"${BRAND}"

"${BRAND} smartphones"

"${BRAND} phones"

"${BRAND} mobile phones"

"${BRAND} specifications"

"${BRAND} latest phones"

"${BRAND} models"

Avoid keyword stuffing.

----------------------------------------------------
FIELDS
----------------------------------------------------

Use factual information only.

Founded

Headquarters

Operating System

Popular Series

Global Presence

Official Website

Popular Series must contain every major smartphone lineup.

Example:

Samsung

Galaxy S

Galaxy Z

Galaxy A

Galaxy M

Galaxy F

----------------------------------------------------
OUTPUT
----------------------------------------------------

Return ONLY JSON.

{
    "heading":"About ${BRAND}",
    "description":"",
    "founded":"",
    "headquarters":"",
    "popularSeries":[
        "",
        "",
        "",
        ""
    ],
    "operatingSystem":"",
    "globalPresence":"",
    "officialWebsite":""
}

Return nothing except JSON.

    `
}

const brand_faq_prompt = ({ BRAND }) => {
  return `
    You are an expert SEO content writer and smartphone technology editor creating FAQ content for a premium mobile phone specifications website MobileInfoPro (http://mobileinfopro.com) similar to GSMArena, PhoneArena, NanoReview, and Kimovil.

Brand:
${BRAND}

Your task is to generate the 10 most valuable FAQs for this smartphone brand.

The goal is to help users quickly find answers while improving search engine visibility through high-quality, helpful content.

----------------------------------------------------
TARGET AUDIENCE
----------------------------------------------------

People searching Google for:

• ${BRAND} phones
• ${BRAND} smartphones
• ${BRAND} mobile phones
• ${BRAND} latest phones
• ${BRAND} specifications
• ${BRAND} reviews
• ${BRAND} comparison
• buying advice
• software updates
• camera quality
• battery life
• gaming performance

----------------------------------------------------
FAQ REQUIREMENTS
----------------------------------------------------

Create EXACTLY 10 FAQs.

The questions should cover different search intents.

Avoid repeating the same topic.

Questions should sound like real Google searches.

Use natural language.

Mix beginner and advanced questions.

Prioritize evergreen questions that remain useful for years.

----------------------------------------------------
INCLUDE QUESTIONS ABOUT
----------------------------------------------------

Cover these topics where applicable:

• Brand overview
• Flagship smartphone series
• Budget smartphone series
• Camera performance
• Battery life
• Display quality
• Processor performance
• Software experience
• Android version / custom UI
• Software update policy
• Gaming performance
• Build quality
• Durability
• Foldable phones (if applicable)
• AI features (if applicable)
• Fast charging
• Value for money
• Best phones for different budgets
• Comparison with competitors
• Buying recommendations

Not every topic must be used, but ensure good variety.

----------------------------------------------------
ANSWER REQUIREMENTS
----------------------------------------------------

Each answer should be:

50–100 words

Clear

Helpful

Neutral

Factually accurate

Easy to understand

Professional

Do NOT exaggerate.

Do NOT use marketing language.

Do NOT use emojis.

Do NOT copy content from other websites.

Do NOT use filler text.

----------------------------------------------------
SEO REQUIREMENTS
----------------------------------------------------

Naturally include keywords where relevant:

${BRAND}

${BRAND} phones

${BRAND} smartphones

${BRAND} mobile phones

${BRAND} specifications

${BRAND} latest phones

${BRAND} reviews

${BRAND} models

${BRAND} price

Do NOT keyword stuff.

----------------------------------------------------
QUESTION QUALITY
----------------------------------------------------

Questions should look like:

What are the best ${BRAND} phones in 2026?

Are ${BRAND} smartphones good for gaming?

How long does ${BRAND} provide software updates?

Which ${BRAND} phone has the best camera?

Are ${BRAND} phones worth buying?

What operating system do ${BRAND} smartphones use?

How does ${BRAND} compare with Samsung?

Which ${BRAND} phones support 5G?

Which ${BRAND} phone offers the best battery life?

What is the latest ${BRAND} smartphone series?

Do NOT generate these exact questions unless they are genuinely appropriate.

Create unique questions for each brand.

----------------------------------------------------
OUTPUT FORMAT
----------------------------------------------------

Return ONLY valid JSON.

{
  "faqs": [
    {
      "question": "",
      "answer": ""
    }
  ]
}

Exactly 10 FAQ objects.

Return nothing except JSON.

    `
}

const brand_seo_prompt = ({ BRAND }) => {
  return `
    You are an expert Technical SEO strategist, Schema.org specialist, AI Search Optimization (AISO) consultant, and smartphone technology editor.

Your task is to generate a complete SEO package for the smartphone brand:

${BRAND}

The content will be used on a premium smartphone specifications website similar to GSMArena, PhoneArena, Kimovil, NanoReview, and Android Authority.

The page must rank well in:

• Google Search
• Google AI Overviews
• ChatGPT
• Perplexity AI
• Claude
• Gemini
• Bing Copilot
• Brave AI
• Grok
• DeepSeek

--------------------------------------------------
OBJECTIVES
--------------------------------------------------

Generate SEO that is:

• Helpful
• Human-first
• Entity-rich
• AI-readable
• Knowledge Graph friendly
• E-E-A-T optimized
• Schema ready
• Voice search friendly
• Featured snippet friendly

--------------------------------------------------
PAGE TYPE
--------------------------------------------------

This is a Smartphone Brand Page.

--------------------------------------------------
GENERATE
--------------------------------------------------

1. SEO Title

Length:
50–60 characters

Include:

${BRAND}

Smartphones

Latest Models

Example style:

Samsung Smartphones – Latest Models, Specs & Prices

--------------------------------------------------

2. Meta Description

Length:
150–160 characters

Naturally include:

${BRAND}

phones

smartphones

specifications

latest models

prices

reviews

Do NOT keyword stuff.

--------------------------------------------------

3. Meta Keywords

Return 30 highly relevant keywords.

Mix:

Short-tail

Long-tail

Commercial intent

Informational intent

Example:

Samsung phones

Samsung smartphones

Samsung mobiles

Samsung specifications

Samsung latest phones

Samsung Galaxy

Samsung price

Samsung reviews

Samsung buying guide

Samsung comparison

--------------------------------------------------

4. Open Graph

Generate:

ogTitle

ogDescription

ogType

twitterTitle

twitterDescription


--------------------------------------------------

10. Target Keywords

Return 30 SEO keywords.

--------------------------------------------------

12. Related Topics

Return 20 semantically related topics.

14. JSON-LD Schema

Generate complete valid JSON-LD.

Include:

Organization

WebPage

BreadcrumbList

FAQPage (empty array)

Brand

WebSite

Use Schema.org vocabulary.

--------------------------------------------------

15. AI Overview Summary

Write 80–120 words.

This summary should be optimized for AI assistants.

It should answer:

Who is ${BRAND}?

What makes it popular?

Which phones does it make?

Who should buy it?

Use concise, factual language.

--------------------------------------------------

16. AI Citation Summary

Write 40–60 words.

Imagine ChatGPT or Google AI quoting your website.

--------------------------------------------------

RULES

Never invent facts.

Use factual information.

No marketing language.

No hype.

No emojis.

No clickbait.

Do not overuse keywords.

Write naturally.

Return ONLY valid JSON in the following format.

{
  "seo": {
    "metaTitle": "",
    "metaDescription": "",
    "metaKeywords": [],

    "targetKeywords": [],

    "relatedTopics": [],

    "openGraph": {
      "title": "",
      "description": "",
      "type": "website"
    },

    "twitter": {
      "title": "",
      "description": ""
    },

    "aiOverview": "",

    "aiCitationSummary": "",

    "schema": {
      "@context": "https://schema.org",
      "@graph": [ ]
    }
  }
}

No markdown.

No explanations.

No extra text.

    `
}


const brand_hero_img_prompt = ({ BRAND }) => {
  return `
Create a premium official-style smartphone product render for a smartphone brand page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand:
${BRAND}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Automatically select the single best smartphone model that represents the entire ${BRAND} smartphone brand.

The model must be selected automatically.

Do NOT ask for the model name.

Selection priority:

1. Current latest flagship smartphone
2. Most recognizable flagship smartphone
3. Most popular premium smartphone
4. Highest-end mainstream smartphone currently representing the brand

Choose ONE real, officially released smartphone from ${BRAND}.

The selected device should represent the current identity and design language of the ${BRAND} smartphone lineup.

Do NOT combine multiple smartphone models.

Do NOT show multiple generations.

Do NOT invent a concept device.

Do NOT create a fictional smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVICE ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The smartphone MUST accurately match the real official hardware of the selected ${BRAND} model.

Preserve the exact real-world design characteristics, including:

• Camera layout
• Camera module shape
• Camera size
• Camera rings
• Flash position
• Camera sensor arrangement
• Frame shape
• Display proportions
• Display bezels
• Punch-hole or notch
• Front camera position
• Side buttons
• Alert/action button if applicable
• USB-C port
• Speaker grills
• Microphone openings
• Antenna lines
• Curved or flat display
• Frame material
• Back panel material
• Overall proportions
• Official industrial design

Do NOT redesign the phone.

Do NOT modernize the phone.

Do NOT invent hardware.

Do NOT merge hardware from different ${BRAND} models.

The final smartphone must be immediately recognizable as a real official ${BRAND} flagship device.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Show TWO identical phones of the selected model only.

Front phone:

• Positioned slightly in front
• Facing directly toward the viewer
• Display turned on
• Perfectly vertical
• Main focal point

Back phone:

• Positioned slightly behind and to the left
• Rotated approximately 25°
• Rear panel facing the viewer
• Camera module clearly visible
• Same exact smartphone model as the front phone

Both devices must remain completely visible.

Do not crop either phone.

Keep balanced spacing.

Center the composition.

The phones should occupy approximately 85–90% of the canvas height.

The composition should be suitable for a premium smartphone brand website hero section.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISPLAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Show the official software experience used by the selected smartphone.

Examples include:

• One UI
• iOS
• HyperOS
• ColorOS
• OxygenOS
• Nothing OS
• MagicOS
• Funtouch OS
• OriginOS
• MyUX
• Realme UI
• ZenUI

Use an official-style premium wallpaper appropriate for the selected device.

The display must look realistic and consistent with the selected manufacturer's software design.

Do NOT display:

• Carrier logos
• Notifications
• Widgets
• Watermarks
• Time
• Weather
• App icons
• Text
• Advertisements
• UI overlays

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Automatically select the most premium official launch color of the selected flagship.

The color MUST be a real officially released color.

Do NOT invent a color.

Do NOT use custom gradients.

Do NOT combine colors from different models.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIGHTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Luxury commercial studio lighting.

Soft controlled reflections.

Realistic metal reflections.

Realistic glass reflections.

Clean highlights.

Natural shadows.

Accurate material rendering.

Premium editorial product photography.

Subtle realistic depth.

No excessive glow.

No dramatic cinematic effects.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transparent PNG.

Absolutely no background.

No floor.

No environment.

No studio backdrop.

No external reflections.

No props.

No accessories.

No cables.

No chargers.

No cases.

No people.

No hands.

No text.

No logos floating outside the smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Official manufacturer product render quality.

Hyper-realistic.

Ultra sharp.

Commercial advertising quality.

Perfect clean edges.

Accurate geometry.

Accurate materials.

Photorealistic glass.

Photorealistic metal.

Photorealistic camera lenses.

High-end product visualization.

8K-quality detail.

Suitable for a premium smartphone specifications and comparison website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The final image should look like an official promotional smartphone render released by ${BRAND}.

It must feel premium, clean, minimal and authentic.

No artistic effects.

No concept designs.

No futuristic modifications.

No exaggerated reflections.

No sci-fi elements.

No floating UI.

No additional objects.

No accessories.

Focus entirely on accurately showcasing the selected ${BRAND} flagship smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand:
${BRAND}

Automatically determine the most appropriate current flagship smartphone from ${BRAND}.

Do not ask for the model name.

Use ONE real officially released smartphone model.

Show the same model from front and rear perspectives.

Maintain exact official hardware design.

Use a real official premium launch color.

Transparent background.

Output format:
PNG

Dimensions:
1024 X 1536

Final output must contain ONLY the two smartphones with transparent background.
  `;
};

export { brand_logo_prompt, brand_hero_img_prompt, brand_hero_prompt, brand_about_prompt, brand_faq_prompt, brand_seo_prompt }
