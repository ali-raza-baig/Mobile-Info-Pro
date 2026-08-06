
const series_hero_img_prompt = ({ BRAND, SERIES }) => {
  return `
      Create a premium official-style smartphone product render for a smartphone series page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERIES INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand:
${BRAND}

Series:
${SERIES}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Automatically select the single best smartphone model that represents the entire ${BRAND} ${SERIES} lineup.

Selection priority:

1. Latest flagship model
2. Most recognizable model
3. Most popular model
4. Highest-end model

Do not ask for the model name.

Choose the most appropriate official device automatically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVICE ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The smartphone MUST accurately match the real official hardware.

Preserve:

• Camera layout
• Camera size
• Camera rings
• Flash position
• Frame shape
• Display bezels
• Punch-hole or notch
• Side buttons
• USB-C port
• Speaker grills
• Antenna lines
• Curved or flat display
• Frame material
• Overall proportions

Do NOT redesign the phone.

Do NOT invent hardware.

Do NOT merge multiple models.

The render should be immediately recognizable as the selected official smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Show TWO phones only.

Front phone:

• Positioned slightly in front
• Facing directly toward the viewer
• Display turned on
• Perfectly vertical

Back phone:

• Positioned behind on the left
• Rotated approximately 25°
• Camera module clearly visible

Both devices should remain fully visible.

Keep balanced spacing.

Center the composition.

The phones should occupy approximately 85–90% of the canvas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISPLAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Show the official software experience.

Examples:

• One UI
• HyperOS
• ColorOS
• OxygenOS
• Nothing OS
• MagicOS

Use an official-style premium wallpaper.

Do NOT display:

Carrier logos

Notifications

Widgets

Watermarks

Time

Weather

App icons

Text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Automatically choose the most premium official launch color for the selected model.

Do NOT invent colors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIGHTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Luxury commercial studio lighting.

Soft reflections.

Realistic metal reflections.

Realistic glass reflections.

Clean highlights.

Natural shadows.

Editorial product photography.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transparent PNG.

No background.

No floor.

No reflections outside the phone.

No props.

No accessories.

No people.

No hands.

No text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Official manufacturer product render quality.

Hyper-realistic.

Ultra sharp.

Commercial advertising quality.

Perfect edges.

8K quality.

Photorealistic.

Suitable for a premium technology website hero section.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The final image should look like an official promotional render released by ${BRAND}, suitable for editorial use on a premium smartphone specifications website.
Image  Dimensions must be 1024 X 1536

No artistic effects.

No concept designs.

No futuristic modifications.

No exaggerated reflections.

No floating UI elements.

Focus entirely on accurately showcasing the smartphone's industrial design.

Output:
Transparent PNG.
Dimensions  1024 X 1536




  `
}

const series_hero_prompt = ({ BRAND, SERIES }) => {
  return `
    You are a senior smartphone technology journalist, SEO strategist, and knowledge graph content writer creating content for MobileInfoPro (https://mobileinfopro.com), a premium smartphone database similar to GSMArena, PhoneArena, Kimovil, NanoReview, and DXOMARK.

Your task is to generate the Hero section content for a smartphone series page.

----------------------------------------
INPUT
----------------------------------------

Brand:
${BRAND}

Series:
${SERIES}

----------------------------------------
OBJECTIVE
----------------------------------------

Create a Hero section that immediately explains what the ${BRAND} ${SERIES} is, why it exists, who it is for, and what users can expect from this smartphone lineup.

The content should satisfy users searching for:

• ${BRAND} ${SERIES}
• ${BRAND} ${SERIES} Phones
• ${BRAND} ${SERIES} Smartphones
• ${BRAND} ${SERIES} Models
• ${BRAND} ${SERIES} Specifications
• ${BRAND} ${SERIES} Price
• Best ${BRAND} ${SERIES} Phone
• Latest ${BRAND} ${SERIES}

The writing should answer these questions naturally:

• What is the ${SERIES} series?
• Where does it sit in the ${BRAND} lineup?
• Why is it popular?
• What features define the series?
• Who should buy it?
• What can users do on this page?

----------------------------------------
WRITING STYLE
----------------------------------------

Write like an experienced technology journalist.

NOT marketing.

NOT promotional.

NOT clickbait.

NOT sales copy.

NOT AI sounding.

Do not exaggerate.

Do not use filler words.

Do not use emojis.

Use simple English.

Use active voice.

Write naturally.

Maintain factual accuracy.

Never invent information.

If information is uncertain, use careful wording instead of making assumptions.

----------------------------------------
CONTENT REQUIREMENTS
----------------------------------------

Write ONE paragraph.

Length:
70–120 words.

The FIRST sentence MUST define the smartphone series.

Example style:

"The Samsung Galaxy S Series is Samsung's flagship smartphone lineup designed for users who want premium performance, advanced cameras, and the latest Galaxy AI features."

Then naturally explain:

• Series positioning
  (Flagship, Mid-range, Budget, Foldable, Gaming, Camera-focused etc.)

• Main purpose of the lineup

• Typical buyers

• Major technologies

Examples:

AMOLED

Dynamic AMOLED

LTPO

Galaxy AI

One UI

Android

Snapdragon

Exynos

Dimensity

Fast Charging

Wireless Charging

Periscope Camera

AI Camera

Premium Build

High Refresh Display

Do NOT force keywords.

Only mention technologies that are genuinely associated with this series.

Mention important sub-models when applicable.

Examples:

Ultra

Plus

FE

Pro

Pro Max

Lite

Mini

Edge

Fold

Flip

Explain what visitors can do on this page.

Examples:

Compare models

View specifications

Check prices

Explore AI reviews

Find the latest devices

Compare cameras

Compare battery performance

Compare displays

----------------------------------------
SEO REQUIREMENTS
----------------------------------------

Naturally include these entities whenever appropriate:

${BRAND}

${SERIES}

${BRAND} ${SERIES}

${BRAND} ${SERIES} Phones

${BRAND} ${SERIES} Models

${BRAND} ${SERIES} Specifications

${BRAND} ${SERIES} Price

Latest ${BRAND} ${SERIES}

Best ${BRAND} ${SERIES}

Do NOT keyword stuff.

Prioritize readability.

----------------------------------------
TITLE
----------------------------------------

Generate an SEO-friendly H1.

Examples:

Samsung Galaxy S Series Phones

Samsung Galaxy A Series Phones

Apple iPhone Pro Series

Xiaomi Redmi Note Series Phones

Never return a generic title.

----------------------------------------
SUBTITLE
----------------------------------------

Always return

"Smartphones"

----------------------------------------
STATISTICS
----------------------------------------

Estimate realistic values.

Do NOT invent impossible numbers.

Return:

totalModels

Approximate number of released models in this series.

seriesStarted

Year the series was introduced.

latestModel

Current flagship or latest model in this series.

averageRating

Decimal between 4.5 and 4.9.

priceRange

Typical global launch price range.

Examples:

"$199–399"

"$799–1299"

aiReviews

Always true.

----------------------------------------
OUTPUT
----------------------------------------

Return ONLY valid JSON.

{
  "title": "",
  "subtitle": "Smartphones",
  "description": "",
  "stats": {
    "totalModels": 0,
    "seriesStarted": 0,
    "latestModel": "",
    "averageRating": 0,
    "priceRange": "",
    "aiReviews": true
  }
}

Return nothing except valid JSON.
    `
}

const series_about_prompt = ({ BRAND, SERIES }) => {
  return `
    You are a senior smartphone technology journalist, mobile industry analyst, and SEO content strategist writing for MobileInfoPro (https://mobileinfopro.com), a premium smartphone database similar to GSMArena, PhoneArena, Kimovil, NanoReview, and DXOMARK.

Your task is to generate the About section for a smartphone series page.

------------------------------------------------------------
INPUT
------------------------------------------------------------

Brand:
${BRAND}

Series:
${SERIES}

------------------------------------------------------------
OBJECTIVE
------------------------------------------------------------

Create a factual, comprehensive, and search-friendly overview that explains the smartphone series.

The content should help users understand:

• What the series is
• Why it exists
• Where it fits within the ${BRAND} lineup
• What makes it different
• Which users it targets
• What technologies define it
• Which devices belong to it

This content should satisfy users searching for:

• ${BRAND} ${SERIES}
• About ${BRAND} ${SERIES}
• ${BRAND} ${SERIES} Phones
• ${BRAND} ${SERIES} Smartphones
• ${BRAND} ${SERIES} Specifications
• ${BRAND} ${SERIES} Models
• Best ${BRAND} ${SERIES}
• Latest ${BRAND} ${SERIES}

------------------------------------------------------------
WRITING STYLE
------------------------------------------------------------

Write like a professional technology journalist.

Be informative.

Be objective.

Be factual.

Be concise.

Use natural English.

Never sound promotional.

Never use marketing language.

Never exaggerate.

Never invent facts.

Never mention AI.

Never use emojis.

Never use bullet points.

Never use headings.

Prefer short readable sentences.

------------------------------------------------------------
DESCRIPTION
------------------------------------------------------------

Write ONE paragraph.

Length:
90–120 words.

The FIRST sentence MUST clearly define the series.

Example style:

"The Samsung Galaxy S Series is Samsung's flagship smartphone lineup, designed to deliver premium performance, advanced camera technology, and cutting-edge Android experiences."

Then naturally explain:

• history of the series
• why the series was introduced
• its position in the brand lineup
• flagship / mid-range / budget classification
• premium features commonly found across the lineup
• software experience
• update policy (if generally applicable)
• design philosophy
• camera characteristics
• display technologies
• performance focus
• battery and charging approach
• ecosystem integration (if applicable)
• target audience
• global availability

Mention notable models only if they genuinely belong to the series.

------------------------------------------------------------
ENTITY OPTIMIZATION
------------------------------------------------------------

Naturally mention technologies associated with this series whenever applicable.

Examples include:

Android

One UI

Galaxy AI

Dynamic AMOLED

LTPO AMOLED

Snapdragon

Exynos

MediaTek Dimensity

Wireless Charging

Fast Charging

Periscope Camera

IP Rating

Gorilla Glass

Aluminum Frame

Titanium Frame

Do NOT force these entities.

Only include technologies genuinely associated with this series.

------------------------------------------------------------
SEO
------------------------------------------------------------

Naturally include these phrases when appropriate:

${BRAND}

${SERIES}

${BRAND} ${SERIES}

${BRAND} ${SERIES} Phones

${BRAND} ${SERIES} Smartphones

${BRAND} ${SERIES} Models

${BRAND} ${SERIES} Specifications

Latest ${BRAND} ${SERIES}

Best ${BRAND} ${SERIES}

Avoid keyword stuffing.

Write for humans first.

------------------------------------------------------------
STRUCTURED DATA
------------------------------------------------------------

Return factual structured information.

firstReleased

Year the series debuted.

seriesCategory

One of:

Flagship

Mid-range

Budget

Gaming

Camera

Foldable

Business

Entry-level

operatingSystem

Examples:

Android

Android + One UI

HarmonyOS

HyperOS

ColorOS

Nothing OS

targetAudience

One concise sentence.

globalAvailability

Examples:

Worldwide

Selected Markets

Asia

Europe

North America

Multiple Regions

designFocus

One concise sentence.

softwareExperience

One concise sentence.

cameraFocus

One concise sentence.

displayTechnology

One concise sentence.

performanceFocus

One concise sentence.

------------------------------------------------------------
NOTABLE MODELS
------------------------------------------------------------

Return 4–8 important smartphones that belong to this series.

Only include genuine models.

Order them chronologically from oldest to newest whenever practical.

------------------------------------------------------------
OUTPUT
------------------------------------------------------------

Return ONLY valid JSON.

{
  "heading": "About ${BRAND} ${SERIES}",
  "description": "",
  "firstReleased": 0,
  "seriesCategory": "",
  "operatingSystem": "",
  "targetAudience": "",
  "globalAvailability": "",
  "designFocus": "",
  "softwareExperience": "",
  "cameraFocus": "",
  "displayTechnology": "",
  "performanceFocus": "",
  "keyModels": [
    ""
  ]
}

Return nothing except valid JSON.
    `
}

const series_faq_prompt = ({ BRAND, SERIES }) => {
  return `
    You are a senior smartphone technology journalist, SEO strategist, and search intent specialist writing content for MobileInfoPro (https://mobileinfopro.com), a premium smartphone database similar to GSMArena, PhoneArena, Kimovil, NanoReview, and DXOMARK.

Your task is to generate EXACTLY 10 high-quality FAQs for the ${BRAND} ${SERIES} series page.

------------------------------------------------------------
INPUT
------------------------------------------------------------

Brand:
${BRAND}

Series:
${SERIES}

------------------------------------------------------------
OBJECTIVE
------------------------------------------------------------

Generate the 10 most valuable FAQs that users are genuinely likely to search before purchasing, comparing, or researching the ${BRAND} ${SERIES}.

The FAQs should improve:

• User experience
• Google Search visibility
• Google AI Overviews
• Featured Snippets
• Voice Search
• AI assistants (ChatGPT, Gemini, Claude, Perplexity, Copilot)

Every question should answer a different user intent.

------------------------------------------------------------
QUESTION SELECTION
------------------------------------------------------------

Choose ONLY the 10 most useful questions.

Prioritize questions users actually search for.

Avoid generic filler.

Avoid duplicate intent.

Avoid rewording the same question.

Each FAQ should cover a unique topic.

------------------------------------------------------------
POSSIBLE SEARCH INTENTS
------------------------------------------------------------

Choose the best 10 from topics such as:

• What is the ${BRAND} ${SERIES}?
• Who is the series designed for?
• Best model in the series
• Latest model
• Camera quality
• Battery life
• Display quality
• Performance
• Gaming
• Software experience
• Android version
• Update policy
• Build quality
• Water resistance
• AI features
• Charging speed
• 5G support
• Value for money
• Long-term reliability
• Comparison with another series
• Buying advice
• Which model to choose
• Common differences between models

Do NOT force every topic.

Only include the most relevant ones.

------------------------------------------------------------
QUESTION WRITING
------------------------------------------------------------

Questions must sound like real Google searches.

Examples:

Which Samsung Galaxy S phone has the best camera?

Are Samsung Galaxy S phones good for gaming?

How many years of software updates do Samsung Galaxy S phones receive?

Which Samsung Galaxy S model offers the best battery life?

Do not copy these examples.

Generate unique questions for this series.

------------------------------------------------------------
ANSWER REQUIREMENTS
------------------------------------------------------------

Each answer must:

• 20–100 words
• Directly answer the question in the first sentence
• Be factually accurate
• Be objective
• Be easy to understand
• Use simple English
• Avoid marketing language
• Avoid hype
• Avoid emojis
• Avoid filler

If information varies by model, explain that clearly.

Never invent specifications or unsupported claims.

------------------------------------------------------------
SEO REQUIREMENTS
------------------------------------------------------------

Naturally mention relevant entities where appropriate.

Examples:

${BRAND}

${SERIES}

${BRAND} ${SERIES}

${BRAND} ${SERIES} phones

${BRAND} ${SERIES} smartphones

${BRAND} ${SERIES} models

${BRAND} ${SERIES} specifications

${BRAND} ${SERIES} price

Latest ${BRAND} ${SERIES}

Best ${BRAND} ${SERIES}

Do NOT keyword stuff.

Write for humans first.

------------------------------------------------------------
QUALITY CHECK
------------------------------------------------------------

Before returning the FAQs, ensure:

✓ Exactly 10 FAQs
✓ No duplicate questions
✓ No duplicate answers
✓ Covers multiple search intents
✓ Suitable for FAQPage schema
✓ Evergreen whenever possible
✓ Helpful for beginners and experienced users
✓ Answers are concise but complete

------------------------------------------------------------
OUTPUT
------------------------------------------------------------

Return ONLY valid JSON.

{
  "faqs": [
    {
      "question": "",
      "answer": ""
    }
  ]
}

Requirements:

• Exactly 10 FAQ objects
• Valid JSON
• No markdown
• No explanations
• No text outside the JSON
    
    `
}

const series_seo_prompt = ({ BRAND, SERIES }) => {
  return `
    You are a Senior Technical SEO Consultant, Smartphone Industry Analyst, Knowledge Graph Specialist, AI Search Optimization (AISO) Expert, and Technology Editor writing for MobileInfoPro (https://mobileinfopro.com), a premium smartphone database similar to GSMArena, PhoneArena, Kimovil, NanoReview, Android Authority, and NotebookCheck.

Your task is to generate a COMPLETE SEO package for a smartphone SERIES page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand:
${BRAND}

Series:
${SERIES}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate a complete SEO package that helps this page perform well in:

• Google Search
• Google AI Overviews
• Bing
• Bing Copilot
• ChatGPT
• Gemini
• Claude
• Perplexity
• Brave AI
• Grok
• DeepSeek
• Voice Search
• Featured Snippets

The generated content must be:

• Human-first
• Helpful
• Factually accurate
• Entity-rich
• Knowledge Graph friendly
• E-E-A-T aligned
• AI readable
• Search intent optimized
• Evergreen
• Unique
• Easy to crawl

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEARCH INTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The page should satisfy users searching for:

${BRAND} ${SERIES}

${BRAND} ${SERIES} Phones

${BRAND} ${SERIES} Smartphones

${BRAND} ${SERIES} Models

${BRAND} ${SERIES} Specifications

${BRAND} ${SERIES} Price

${BRAND} ${SERIES} Review

Latest ${BRAND} ${SERIES}

Best ${BRAND} ${SERIES}

Compare ${BRAND} ${SERIES}

Buying Guide

Camera Comparison

Battery Performance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITING RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Write naturally.

Write like a professional technology journalist.

Never sound promotional.

Never use clickbait.

Never exaggerate.

Never invent facts.

Never fabricate prices.

Never fabricate release dates.

Never fabricate software policies.

Never fabricate model names.

Use simple English.

Use active voice.

Prefer short readable sentences.

Avoid unnecessary repetition.

Write unique content.

Avoid duplicate metadata across different series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENTITY OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Naturally include relevant entities only when appropriate.

Examples:

Android

One UI

Galaxy AI

HyperOS

ColorOS

Nothing OS

Snapdragon

Exynos

Dimensity

Tensor

AMOLED

Dynamic AMOLED

LTPO

OLED

5G

Fast Charging

Wireless Charging

IP Rating

Periscope Camera

AI Camera

Do NOT force entities.

Only mention technologies genuinely associated with this series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SEO Title

Requirements

• 50–60 characters
• Brand first
• Series second
• Include primary search intent
• Encourage clicks naturally

Examples

Samsung Galaxy S Series Phones – Specs & Prices

Xiaomi Redmi Note Series – Models & Specs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. Meta Description

150–160 characters

It must answer

What is this page?

What can users do?

Why is it useful?

Naturally include:

Brand

Series

Phones

Models

Specifications

Prices

Reviews

Comparison

No keyword stuffing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Target Keywords

Generate exactly 30 unique keywords.

Mix:

Short-tail

Long-tail

Commercial intent

Informational intent

Comparison intent

Buying intent

Avoid duplicates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. Related Topics

Generate exactly 20 semantically related topics.

Examples

Camera

Battery

Display

Processor

Gaming

Software

Updates

AI Features

5G

Charging

Build Quality

User Experience

Only include topics relevant to the series.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. Open Graph

Generate

title

description

type

imageAlt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. Twitter Card

Generate

title

description

card

Always use

summary_large_image

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. AI Overview Summary

Length

100–140 words

Structure

Paragraph 1

Define the series.

Paragraph 2

Explain:

Target audience

Key technologies

Typical devices

Strengths

Reasons users choose it

Suitable for AI assistants to summarize.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. AI Citation Summary

40–60 words

Write a concise factual summary suitable for quotation by AI assistants.

Avoid promotional language.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. Featured Snippet Summary

40–70 words

Directly answer

"What is the ${BRAND} ${SERIES}?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. Page Summary

Generate a concise summary.

40–80 words.

Explain what users will find on this page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. JSON-LD Schema

Generate a VALID Schema.org JSON-LD graph for this SERIES PAGE.

Include ONLY page-specific schema.

Do NOT generate Organization or WebSite schema.

Include:

CollectionPage

BreadcrumbList

ItemList

FAQPage

ProductGroup

WebPage

The FAQPage should contain an empty array.

The ItemList should be empty.

Use placeholder URLs where needed.

Example

"/brand/${BRAND}"

"/series/${SERIES}"

Do NOT invent product URLs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before generating the response verify:

✓ SEO title length is within limits

✓ Meta description length is within limits

✓ Exactly 30 target keywords

✓ Exactly 20 related topics

✓ AI Overview is unique

✓ AI Citation is unique

✓ Featured Snippet is unique

✓ No duplicate keywords

✓ No duplicate topics

✓ No hallucinated facts

✓ Valid JSON

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

{
  "seo": {
    "metaTitle": "",
    "metaDescription": "",
    "targetKeywords": [],
    "relatedTopics": [],
    "openGraph": {
      "title": "",
      "description": "",
      "type": "website",
      "imageAlt": ""
    },
    "twitter": {
      "title": "",
      "description": "",
      "card": "summary_large_image"
    },
    "featuredSnippet": "",
    "pageSummary": "",
    "aiOverview": "",
    "aiCitationSummary": "",
    "schema": {
      "@context": "https://schema.org",
      "@graph": []
    }
  }
}

Return ONLY valid JSON.

No markdown.

No explanations.

No comments.

No extra text.
    
    `
}

export { series_hero_img_prompt, series_hero_prompt, series_about_prompt, series_faq_prompt, series_seo_prompt }