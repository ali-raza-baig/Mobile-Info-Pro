const find_model_names_prompt = ({ BRAND, SERIES }) => {
  return `
    You are a smartphone industry researcher, mobile historian, product database architect, and official catalog specialist with expertise in smartphone product lineups across every global smartphone manufacturer.
Your task is to identify EVERY official smartphone model that belongs to the following smartphone series.
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
Create a complete database of every smartphone officially released under this series.
The output will be used to build a professional smartphone specifications database similar to GSMArena, therefore accuracy and completeness are critical.
Include every official model ever announced for this series, including:
•	Global variants
•	International models
•	Regional variants with different official names
•	Lite models
•	Mini models
•	Plus models
•	Pro models
•	Pro+
•	Ultra models
•	FE editions
•	SE editions
•	Prime editions
•	Play editions
•	Max editions
•	Neo editions
•	Turbo editions
•	Racing editions
•	Explorer editions
•	Zoom editions
•	Power editions
•	Youth editions
•	Ace editions
•	GT editions
•	Fold models
•	Flip models
•	Tactical editions
•	Enterprise editions
•	Special editions
•	Any officially released model that belongs to this series.
Do NOT include:
•	Tablets
•	Smartwatches
•	Accessories
•	Feature phones
•	Unknown prototypes
•	Engineering samples
•	Leaked devices
•	Cancelled devices
•	Rumored devices
Only include officially announced smartphones.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOR EVERY MODEL FIND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1.	Official model name
2.	Official marketing name
3.	URL friendly slug
4.	Series name
5.	Brand name
6.	Model family
Examples:
Galaxy S Ultra
Galaxy S Plus
Galaxy S FE
Galaxy A
Redmi Note Pro
iPhone Pro Max
etc.
7.	Release status
Allowed values only:
Active
Discontinued
Upcoming
Cancelled
Unknown
8.	Announcement date
Format
YYYY-MM-DD
If only month is known
YYYY-MM
If only year is known
YYYY
If unavailable
null
9.	Release date
Same formatting rules.
10.	Discontinuation year
Return year only.
Example
2023
Otherwise null.
11.	Available colors
Return official marketing color names only.
Examples
Titanium Black
Titanium Gray
Ocean Blue
Phantom White
Do NOT invent colors.
12.	Memory variants
Return every officially available RAM + Storage + color combination.
Example
[{
color:'Black',
ram:'4',
Storage:'64'
},{
color:'Blue',
ram:'4',
Storage:'128'
},{
color:'Gray',
ram:'8',
Storage:'128'
}
]
Do not merge variants.
Do not invent varients
Also give Ram and Storage 
Example
ram:['4GB', '8GB'] all available 
storage:["128GB" , "256GB"] all available
13.	Network generation
Allowed values
2G
3G
4G
5G
Multiple values allowed.
14.	Foldable
true
false
15.	Series generation
Examples
Galaxy S25
Galaxy S24
iPhone 16
Redmi Note 14
Otherwise null.
16.	Model number
Return official model numbers if widely documented.
Example
SM-S938B
A2894
Otherwise
[]
17.	Markets
Return official launch markets if known.
Example
Global
India
China
Europe
Japan
USA
Latin America
Middle East
18.	Operating system at launch
Examples
Android 15
Android 14
iOS 18
HarmonyOS 5
Otherwise null.
19.	Short description
Write a concise factual description (40–60 words).
Describe:
Position in lineup
Main target audience
Most notable features
Do not write marketing language.
20.	Successor
Official successor model.
Otherwise null.
21.	Predecessor
Official predecessor model.
Otherwise null.
22. Category 
write an category that best describe smartphone purpose like
Camera Phones
Gaming Phones
Battery Phones
Budget Phones
Business Phones
Compact Phones
Display Phones
AI Phones
5G Phones
Example Return 
[
'Camera Phones','Gaming Phones'
] 
only two or three most relavent.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON OUTPUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return ONLY valid JSON.
Do NOT use Markdown.
Do NOT wrap JSON inside code fences.
Do NOT explain anything.
Do NOT add notes.
Do NOT add comments.
Do NOT add extra keys.
Use identical key names every time.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
"brand": "${BRAND}",
"series": "${SERIES}",
"models": [
{
"name": "",
"marketingName": "",
"slug": "",
"brand": "",
"series": "",
"family": "",
"status": "",
"category":[]
"announcementDate": null,
"releaseDate": null,
"discontinuedYear": null,
"colors": [],
"ram":[],
"storage":[],
"memoryVariants": [],
"network": [],
"foldable": false,
"generation": null,
"modelNumbers": [],
"markets": [],
"launchOS": null,
"description": "",
"predecessor": null,
"successor": null
}
],
totalModels:0,
activeModels:0,
discontinuedModels:0,
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•	Include every official smartphone in chronological order.
•	Never invent devices.
•	Never invent colors.
•	Never invent RAM variants.
•	Never invent release dates.
•	Never guess specifications.
•	Use null whenever information cannot be verified.
•	Preserve official capitalization.
•	Preserve official spacing.
•	Preserve official punctuation.
•	Use official English product names.
•	Remove duplicate entries.
•	Return one object per smartphone.
•	Every model must belong to the specified series.
•	Ensure the final JSON is syntactically valid.
•	The output must be complete, consistent, and suitable for direct database import.


    `
}

const model_img_prompt = ({ BRAND, SERIES, MODEL, COLOR }) => {
  return `
    Create a premium official-style smartphone product image render for a smartphone model page.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVICE INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand:
${BRAND}
Series:
${SERIES}
Model:
${MODEL}
Official Color:
${COLOR}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create an ultra-realistic official product render of the exact smartphone model.
The render must accurately match the real retail device released by the manufacturer.
Do NOT redesign the phone.
Do NOT modify the hardware.
Do NOT combine multiple variants.
The final image should look identical to the official promotional render published by the manufacturer.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVICE ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The smartphone must exactly match the official retail hardware.
Preserve every detail including:
• Overall dimensions
• Aspect ratio
• Thickness
• Corner radius
• Display bezels
• Flat or curved display
• Punch-hole size and position
• Notch design (if applicable)
• Camera module
• Camera housing shape
• Camera ring sizes
• Camera lens arrangement
• Flash position
• LiDAR sensor (if applicable)
• Periscope camera (if applicable)
• Side buttons
• Alert slider
• Camera control button
• Action button
• SIM tray
• USB-C or Lightning port
• Speaker grills
• Microphones
• Antenna lines
• Frame material
• Glass finish
• Matte or glossy back
• Brand logo
• Official regulatory markings if visible on official renders
Do NOT invent any hardware.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Render the phone ONLY in the following official launch color:
${COLOR}
Requirements:
• Match the manufacturer's official color precisely.
• Preserve metallic finish.
• Preserve matte texture.
• Preserve glossy texture.
• Preserve satin finish.
• Preserve titanium finish.
• Preserve glass reflections.
• Preserve official color tone.
Do NOT invent colors.
Do NOT slightly change the hue.
Do NOT mix colors.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Show TWO identical phones.
Front Device
• Centered
• Facing directly forward
• Display ON
• Perfectly vertical
Back Device
• Positioned slightly behind
• Left side
• Rotated approximately 25°
• Camera module fully visible
Keep both phones fully visible.
Balanced composition.
Centered layout.
Phones should occupy approximately 88–92% of the canvas.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DISPLAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display the official operating system experience.
Use the correct interface for this device.
Examples:
• One UI
• HyperOS
• ColorOS
• OxygenOS
• MagicOS
• Funtouch OS
• Nothing OS
• HarmonyOS
• iOS
Requirements:
• Official-style wallpaper
• No icons
• No widgets
• No notifications
• No carrier logo
• No status bar text
• No time
• No weather
• No watermark
• No custom UI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIGHTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Premium commercial studio lighting.
Soft realistic reflections.
Natural shadows.
Editorial lighting.
Luxury product photography.
Perfect edge lighting.
Realistic metal reflections.
Realistic glass reflections.
No exaggerated bloom.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transparent PNG.
No background.
No floor.
No reflection plane.
No props.
No accessories.
No hands.
No people.
No text.
No logos outside the phone.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Official manufacturer promotional render quality.
Ultra photorealistic.
Extremely sharp.
Commercial advertising quality.
Perfect anti-aliasing.
Crisp edges.
Natural reflections.
8K product rendering quality.
Suitable for a premium smartphone specifications website.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The image should be visually indistinguishable from an official product render released by ${BRAND}.
No artistic interpretation.
No concept design.
No futuristic modifications.
No fantasy lighting.
No floating effects.
No dramatic shadows.
No excessive reflections.
Focus entirely on accurately showcasing the smartphone's industrial design.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Format:
Transparent PNG
Dimensions:
1024 × 1536 pixels
Orientation:
Portrait
Background:
Transparent
Output only the rendered smartphone image.


    `
}

const model_details_prompt = ({ BRAND, SERIES, MODEL }) => {
  return `
    You are a senior smartphone market analyst, mobile pricing researcher, hardware reviewer, consumer technology journalist, SEO strategist, AI search optimization expert, and smartphone database editor.
Your task is to generate pricing estimates, editorial reviews, AI analysis, and an overall AI rating for a smartphone.
The content will be published on a premium smartphone database similar to GSMArena and must be optimized for Google Search, Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity, Bing Copilot, and other AI-powered search engines.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand:
${BRAND}
Series:
${SERIES}
Model:
${MODEL}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate the following sections only:
1.	Estimated Price
2.	Human Review
3.	AI Review
4.	AI Rating
The output must be:
• Factually accurate
• Easy to understand
• Human-friendly
• SEO optimized
• AI-search optimized
• Evergreen
• Ready for direct database import
Never invent specifications.
Never exaggerate.
Never use marketing language.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1
ESTIMATED PRICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Estimate the smartphone's current market price in the following countries:
• United States (USD)
• United Kingdom (GBP)
• Canada (CAD)
• China (CNY)
The estimate should consider:
• Official launch price (if known)
• Device age
• Current availability
• Market demand
• Regional pricing trends
• Whether the phone is active or discontinued
For every country return:
• Currency 
• Estimated minimum price
• Estimated maximum price
• Confidence level
Allowed confidence values:
High
Medium
Low
If pricing cannot be estimated reliably, return null.
Do NOT fabricate official launch prices.
Clearly treat these as estimated current market prices.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2
HUMAN REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write a natural review between 100 and 200 words.
Write exactly like an experienced smartphone reviewer.
The review should feel conversational and trustworthy.
Discuss naturally:
• Design
• Display
• Performance
• Cameras
• Battery
• Software
• Everyday usability
• Value for money
Mention both strengths and weaknesses.
Avoid technical jargon unless necessary.
Do not sound robotic.
Do not sound promotional.
Write as if helping a real buyer make a decision.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3
AI REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write an AI-generated analytical review between 100 and 200 words.
The tone should be objective and data-driven.
Evaluate the smartphone using verified specifications and official features.
Consider:
• Hardware
• Software
• Display
• Camera system
• Battery
• Charging
• Performance
• Connectivity
• Long-term usability
• Market position
Explain where the phone performs well and where it falls behind modern competitors.
Avoid emotional language.
Avoid subjective hype.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4
AI RATING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Assign one overall AI Rating.
Allowed range:
1.0–10.0
One decimal place only.
Examples:
6.8
7.4
8.1
9.3
The rating must be calculated based on:
Display
Performance
Camera
Battery
Charging
Software
Build Quality
Connectivity
Audio
Features
Value for Money
Long-term Software Support
Market Competitiveness
Do NOT randomly assign a score.
The rating must realistically reflect the smartphone's launch category, age, specifications, and overall user experience.
Provide a concise explanation (40–80 words) justifying the final score.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITING STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use:
• Professional tone
• Human-friendly language
• Short paragraphs
• Clear wording
• Natural flow
• Easy readability
Write for both beginners and technology enthusiasts.
Do not use:
Best ever
Ultimate
Perfect
Must buy
Game changer
Mind-blowing
Flagship killer
Unbeatable
Revolutionary
Avoid unnecessary repetition.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Naturally include:
• Full official model name
• Brand name
• Series name
• Chipset
• Display technology
• Camera system
• Battery capacity
• Charging technology
• Operating system
• Release year
• 5G support (if applicable)
• Market positioning
Write naturally without keyword stuffing.
Optimize for semantic search, AI-generated answers, featured snippets, and voice search.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON OUTPUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return ONLY valid JSON.
Do NOT use Markdown.
Do NOT wrap JSON inside code fences.
Do NOT include explanations outside JSON.
Do NOT include comments.
Do NOT add extra keys.
Always use identical key names.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
"estimatedPrice": {
"usa": {
"currency": "USD",
"min": null,
"max": null,
"confidence": null
},
"uk": {
"currency": "GBP",
"min": null,
"max": null,
"confidence": null
},
"canada": {
"currency": "CAD",
"min": null,
"max": null,
"confidence": null
},
"china": {
"currency": "CNY",
"min": null,
"max": null,
"confidence": null
}
},
"humanReview": "",
"aiReview": "",
"aiRating": {
"score": 0,
"explanation": ""
}
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•	Base every conclusion on verified specifications and official features.
•	Treat all prices as estimates unless an official current retail price is available.
•	Never invent launch prices or unavailable specifications.
•	Keep both reviews unique and avoid repeating the same sentences.
•	The Human Review should sound like an experienced technology journalist.
•	The AI Review should sound analytical and evidence-based.
•	The AI Rating must align with the device's capabilities, launch segment, software support, and current relevance.
•	Use simple, natural English that is easy to understand worldwide.
•	Produce evergreen, SEO-friendly content suitable for long-term publication.
•	Ensure the final JSON is syntactically valid and ready for direct database import.


    `
}

const model_faqs_prompt = ({ BRAND, SERIES, MODEL }) => {
  return `
    You are a smartphone knowledge graph editor, SEO specialist, AI search optimization expert, mobile technology researcher, and consumer electronics content writer.
Your task is to generate the 10 best FAQs for a smartphone model page.
The FAQs will be published on a premium smartphone specifications website similar to GSMArena and must be optimized for:
•	Google Search
•	Google AI Overviews
•	ChatGPT
•	Gemini
•	Claude
•	Perplexity
•	Bing Copilot
•	Voice Search
•	Featured Snippets
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand:
${BRAND}
Series:
${SERIES}
Model:
${MODEL}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate exactly 10 high-quality FAQs that real users are most likely to search for.
The FAQs should cover:
• Display
• Performance
• Gaming
• Camera
• Battery
• Charging
• Software
• Storage
• 5G
• NFC
• eSIM
• Waterproof rating
• Wireless charging
• Expandable storage
• Release date
• Price
• Value for money
• Comparison-related questions
Choose the most relevant questions according to the smartphone's actual features.
Do not generate irrelevant questions.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FAQ QUALITY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Questions must:
•	Match real user search intent.
•	Be easy to understand.
•	Use natural language.
•	Be optimized for voice search.
•	Be optimized for featured snippets.
•	Be answerable in 40–100 words.
•	Include the full model name naturally.
•	Use simple English.
•	Avoid technical jargon when possible.
Examples:
•	Is ${MODEL} good for gaming?
•	Does ${MODEL} support 5G?
•	How good is the camera on ${MODEL}?
•	Does ${MODEL} have wireless charging?
•	Is ${MODEL} waterproof?
•	How long does the battery last on ${MODEL}?
•	Does ${MODEL} support eSIM?
•	Is ${MODEL} worth buying in {{CURRENT_YEAR}}?
•	What are the main advantages of ${MODEL}?
•	Does ${MODEL} have expandable storage?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANSWER RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Answers must:
•	Be factual.
•	Use verified specifications only.
•	Never invent features.
•	Never guess unavailable information.
•	Return null if information cannot be verified.
•	Mention advantages and limitations when relevant.
•	Use neutral language.
•	Avoid marketing terms.
•	Be evergreen and useful for future readers.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Naturally include:
•	Full official model name
•	Brand name
•	Series name
•	Chipset
•	Display technology
•	Camera features
•	Battery capacity
•	Charging speed
•	Operating system
•	Release year
•	5G support
Do not keyword stuff.
Write naturally for humans and AI search engines.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON OUTPUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return ONLY valid JSON.
Do NOT use Markdown.
Do NOT use code fences.
Do NOT add explanations.
Do NOT add comments.
Do NOT change key names.
Generate exactly 10 FAQs.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
"faqs": [
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
},
{
"question": "",
"answer": ""
}
]
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SPECIAL RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•	Generate exactly 10 FAQs.
•	Prioritize high-search-volume questions.
•	Prioritize buyer-intent questions.
•	Prioritize comparison and purchase-related questions.
•	Include "worth buying in {{CURRENT_YEAR}}" when relevant.
•	Avoid duplicate questions.
•	Ensure all FAQs are suitable for FAQPage schema markup.
•	Optimize for AI-generated answers and featured snippets.
•	Make answers concise, accurate, and easy to understand.
•	Ensure the final JSON is syntactically valid and ready for direct database import.

    `
}

const model_seo_prompt = ({ BRAND, SERIES, MODEL }) => {
  return `
    You are an expert Technical SEO strategist, AI Search Optimization (AISO) consultant, Schema.org specialist, semantic search engineer, smartphone technology editor, and knowledge graph architect.
Your task is to generate a complete SEO package for the following smartphone model.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand:
${BRAND}
Series:
${SERIES}
Model:
${MODEL}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate SEO that is:
• Helpful
• Human-first
• Entity-rich
• AI-readable
• Knowledge Graph friendly
• E-E-A-T optimized
• Schema.org compliant
• Voice Search optimized
• Featured Snippet optimized
• Google AI Overview optimized
• ChatGPT optimized
• Perplexity optimized
• Claude optimized
• Gemini optimized
• Bing Copilot optimized
• Evergreen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE TYPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is a Smartphone Model Page.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1.	SEO Title
Length:
50–60 characters
Naturally include:
• Full model name
• "Specifications"
• "Price"
• "Review"
Example:
Samsung Galaxy S25 Ultra Specifications, Price & Review
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2.	Meta Description
Length:
150–160 characters
Naturally include:
• Full model name
• Specifications
• Price
• Review
• Features
• Camera
• Battery
• Performance
Do not keyword stuff.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3.	Meta Keywords
Generate 40 highly relevant keywords.
Mix:
• Short-tail
• Long-tail
• Informational
• Commercial
• Comparison
Examples:
Samsung Galaxy S25 Ultra
Samsung Galaxy S25 Ultra specifications
Samsung Galaxy S25 Ultra review
Samsung Galaxy S25 Ultra price
Samsung Galaxy S25 Ultra camera
Samsung Galaxy S25 Ultra battery
Samsung Galaxy S25 Ultra performance
Samsung Galaxy S25 Ultra benchmark
Samsung Galaxy S25 Ultra gaming
Samsung Galaxy S25 Ultra vs iPhone
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4.	Open Graph
Generate:
• ogTitle
• ogDescription
• ogType
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5.	Twitter Card
Generate:
• twitterTitle
• twitterDescription
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6.	Target Keywords
Generate 40 SEO keywords.
Focus on:
• Buying intent
• Specifications
• Reviews
• Comparisons
• Price
• Features
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7.	Related Topics
Generate 25 semantically related topics.
Examples:
Android
Snapdragon
AMOLED Display
5G
Fast Charging
Wireless Charging
Gaming Phones
Camera Phones
AI Features
Battery Life
Mobile Photography
Mobile Processor
Smartphone Buying Guide
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8.	Search Intents
Generate keywords grouped into:
• Informational
• Commercial
• Transactional
• Navigational
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9.	Common Search Queries
Generate the 20 most common Google searches users may ask about this smartphone.
Examples:
Is ${MODEL} worth buying?
Does ${MODEL} support 5G?
How good is the camera?
How long does the battery last?
Is ${MODEL} waterproof?
Does ${MODEL} support wireless charging?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10.	AI Overview Summary
Write 100–150 words.
The summary should answer:
• What is ${MODEL}?
• Who is it for?
• Main strengths
• Main weaknesses
• Key specifications
• Whether it is still worth buying
Use concise, factual language.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11.	AI Citation Summary
Write 50–80 words.
Imagine ChatGPT, Gemini or Google AI quoting your website.
Keep it concise.
Factual.
Neutral.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12.	Structured Data
Generate complete Schema.org JSON-LD.
Include:
Product
WebPage
BreadcrumbList
ImageObject
Brand
Offer
AggregateRating (leave ratingValue and reviewCount as null)
Review (empty)
FAQPage (empty)
WebSite
Use valid Schema.org vocabulary.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Write naturally.
Never keyword stuff.
Never exaggerate.
Never invent specifications.
Never invent prices.
Never invent ratings.
Never invent reviews.
Use verified information only.
Optimize for:
Google Search
Google Discover
Google AI Overviews
ChatGPT
Gemini
Claude
Perplexity
Bing Copilot
Voice Search
Featured Snippets
Semantic Search
Knowledge Graph
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON OUTPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Return ONLY valid JSON.
No Markdown.
No code fences.
No explanations.
No comments.
No extra text.
Use identical keys every time.
{
"seo": {
"metaTitle": "",
"metaDescription": "",
"metaKeywords": [],
"targetKeywords": [],
"relatedTopics": [],
"searchIntent": {
"informational": [],
"commercial": [],
"transactional": [],
"navigational": []
},
"commonSearchQueries": [],
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
"@graph": []
}
}
}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•	Return syntactically valid JSON only.
•	Never change JSON key names.
•	Preserve the official smartphone model name exactly.
•	Use factual, evergreen content.
•	Keep metadata within recommended SEO length limits.
•	Optimize for both traditional search engines and modern AI-powered search systems.
•	Ensure all generated content is suitable for direct database import without modification.


    `
}

const model_spec_prompt = ({ BRAND, SERIES, MODEL, SCRAPED_DATA }) => {
  return `
    You are an expert smartphone specification extraction and normalization engine.

Your task is to generate ONE highly accurate, complete, and structured smartphone specification JSON for the requested smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand:
${BRAND}

Series:
${SERIES}

Model:
${MODEL}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRAPED SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You will receive an array of objects.

Each object has the following format:

{
  "title": "...",
  "content": "...",
  "url": "..."
}

The "content" field may contain:

• Official specification tables
• Official product pages
• Complete review articles
• Launch news
• Hands-on reviews
• Marketing pages
• Buying guides
• Comparison pages
• Complete webpage text
• Mixed article content
• Technical specification tables

Some sources may contain only specifications.

Some may contain long articles.

Some may contain duplicate information.

Treat every scraped source as potential evidence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIMARY OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate ONE complete smartphone specification JSON for the requested smartphone.

Your primary goal is ACCURACY.

Use scraped data as your primary source.

If some specifications are missing from the scraped sources, you may complete them using your internal smartphone knowledge ONLY when you are highly confident that the information is correct.

If you are not highly confident, leave the value empty according to the schema.

Do NOT prioritize completeness over correctness.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Always follow this order of trust.

Priority 1

Official manufacturer website

Priority 2

Official press release

Priority 3

Official specification sheet

Priority 4

Trusted specification websites

Priority 5

Trusted review websites

Priority 6

Trusted technology news websites

Priority 7

Your internal smartphone knowledge

Never overwrite verified scraped information with internal knowledge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE CONSOLIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read ALL scraped sources before generating the final JSON.

Merge information from every source.

If multiple sources contain the same value:

Keep only one.

If multiple sources provide complementary information:

Merge them.

If trustworthy sources agree:

Use that value.

If sources disagree:

Choose the value supported by the majority of trustworthy sources.

If there is no clear majority:

Use your internal knowledge ONLY if you are highly confident.

Otherwise leave the field empty.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHONE IDENTIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate specifications ONLY for:

Brand:
${BRAND}

Series:
${SERIES}

Model:
${MODEL}

Ignore every other device.

Ignore:

• Previous models

• Newer models

• Pro models

• Ultra models

• Lite models

• FE models

• Plus models

• Mini models

• Other storage variants unless identical

• Other regional variants unless identical

• Tablets

• Watches

• Accessories

• Comparisons

• Advertisements

• Buying guides

Never merge specifications from another smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERNAL KNOWLEDGE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You are allowed to complete missing specifications using your internal smartphone knowledge.

However:

Never overwrite information already extracted from the scraped sources.

Never contradict official specifications.

Never mix specifications from another phone.

Never mix specifications from another storage variant unless the specification is identical.

Never mix specifications from another regional variant unless the specification is identical.

Never copy specifications from a predecessor or successor model.

Never assume a specification because similar phones share it.

If leaked information conflicts with official information, always prefer official information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFIDENCE RULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before filling any missing field from your internal knowledge, ask yourself:

"Am I highly confident this specification belongs to this exact smartphone model?"

If YES:

Use the value.

If NO:

Leave the field empty.

Accuracy is always more important than completeness.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NORMALIZATION RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Normalize every extracted value.

Examples

Weight

218 g

↓

218

Dimensions

163 x 77.6 x 8.2 mm

↓

{
height:163,
width:77.6,
thickness:8.2
}

Battery

5000 mAh

↓

5000

Refresh Rate

120Hz

↓

120

Brightness

2600 nits

↓

2600

Touch Sampling

480Hz

↓

480

Resolution

3120 × 1440

↓

{
width:3120,
height:1440,
label:"QHD+"
}

Dates

Convert every date into ISO format.

Boolean fields

Return only:

true

false

null

Arrays

Remove duplicate values.

Trim unnecessary whitespace.

Return consistent capitalization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CAMERA RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every physical camera must have its own object.

Rear cameras may include:

Main

Ultra Wide

Telephoto

Periscope

Macro

Depth

Monochrome

Front cameras may include:

Main

Ultra Wide

Depth

Extract every available property.

Do not merge different physical cameras.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BATTERY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Charging methods include:

Wired

Wireless

Reverse Wireless

Reverse Wired

Example

120W Wired

↓

supported=true

watt=120

If explicitly unsupported

supported=false

If unknown

supported=null

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NETWORK RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Extract separately:

2G

3G

4G

5G

Store every supported band individually.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MISSING VALUE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If a value exists in the scraped sources, always use it.

If it does not exist in the scraped sources:

Use your internal smartphone knowledge ONLY if you are highly confident.

Otherwise return the appropriate empty value defined in the JSON schema.

Never fabricate uncertain values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSISTENCY CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before returning the JSON, perform a final validation.

Ensure that:

• Every specification belongs to the requested smartphone.

• No specification belongs to another model.

• No duplicate values exist.

• No conflicting values remain.

• Scraped information always has priority.

• Internal knowledge is only used to fill missing fields.

• Unknown values remain empty.

• Every field follows the required schema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OUTPUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.

Do not return Markdown.

Do not return explanations.

Do not return notes.

Do not return comments.

Do not return citations.

Do not return references.

Do not return confidence scores.

Do not return reasoning.

Do not return code fences.

Do not omit any schema field.

Do not rename any schema field.

Do not add any extra fields.

The JSON must exactly follow the provided schema.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JSON SCHEMA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{
  "general": {
    "announced": "",
    "released": "",
    "status": "",
  "modelNumber": [
    {
      "number": "A2843",
      "regions": [
        "USA",
        "Canada"
      ]
    },
    {
      "number": "A2844",
      "regions": [
        "Europe",
        "Asia",
        "Global"
      ]
    }
  ],
    "boxContents": []
  },
  "design": {
    "dimensions": {
      "height": null,
      "width": null,
      "thickness": null,
      "unit": "mm"
    },
    "weight": {
      "value": null,
      "unit": "g"
    },
    "build": {
      "front": "",
      "back": "",
      "frame": ""
    },
    "protection": "",
    "ipRating": "",
    "simType": "",
    "simCount": null
  },
  "display": {
    "type": "",
    "size": null,
    "resolution": {
      "width": null,
      "height": null,
      "label": ""
    },
    "aspectRatio": "",
    "pixelDensity": null,
    "refreshRate": null,
    "touchSamplingRate": null,
    "brightness": {
      "typical": null,
      "peak": null,
      "unit": "nits"
    },
    "hdr": "",
    "protection": "",
    "alwaysOnDisplay": null,
    "features": []
  },
  "performance": {
    "chipset": {
      "manufacturer": "",
      "name": "",
      "fabrication": ""
    },
    "cpu": {
      "cores": null,
      "architecture": "",
      "clockSpeed": ""
    },
    "gpu": "",
    "npu": ""
  },
  "memory": {
   "ramOptions": [8,12],
   "storageOptions": [64,128],
    "ramType": "",
    "storageType": "",
    "expandable": null,
    "expandableUpto": null
  },
  "camera": {
    "rear": [
      {
        "type": "",
        "megapixel": null,
        "aperture": "",
        "focalLength": "",
        "sensorSize": "",
        "pixelSize": "",
        "opticalZoom": "",
        "stabilization": "",
        "autofocus": "",
        "features": []
      }
    ],
    "front": [
      {
        "type": "",
        "megapixel": null,
        "aperture": "",
        "focalLength": "",
        "sensorSize": "",
        "pixelSize": "",
        "opticalZoom": "",
        "stabilization": "",
        "autofocus": "",
        "features": []
      }
    ],
    "flash": "",
    "video": {
      "rear": [],
      "front": [],
      "features": []
    }
  },
  "battery": {
    "capacity": null,
    "type": "",
    "removable": null,
    "charging": {
      "wired": {
        "supported": null,
        "watt": null
      },
      "wireless": {
        "supported": null,
        "watt": null
      },
      "reverseWireless": {
        "supported": null,
        "watt": null
      },
      "reverseWired": {
        "supported": null,
        "watt": null
      }
    }
  },
  "network": {
    "technologies": [],
    "bands": {
      "2G": [],
      "3G": [],
      "4G": [],
      "5G": []
    }
  },
  "connectivity": {
    "wifi": "",
    "bluetooth": "",
    "gps": [],
    "nfc": null,
    "infrared": null,
    "usb": "",
    "usbOtg": null,
    "headphoneJack": null,
    "fmRadio": null
  },
  "multimedia": {
    "speakers": "",
    "stereo": null,
    "dolbyAtmos": null,
    "microphoneCount": null
  },
  "sensors": [],
  "software": {
    "os": "",
    "osVersion": "",
    "ui": "",
    "osUpdateYears": null,
    "securityUpdateYears": null
  },
  "ai": {
    "supported": null,
    "features": []
  },
  "benchmarks": {
    "antutu": null,
    "geekbenchSingle": null,
    "geekbenchMulti": null,
    "wildlife": null
  },
  "extraFeatures": []
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRAPED DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${SCRAPED_DATA}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SELF VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before generating the final JSON, internally verify every field.

For each specification:

1. Is it supported by the scraped sources?
   → Use it.

2. If not, am I highly confident from my internal knowledge?
   → Use it.

3. If neither condition is true:
   → Leave the field empty.

Never guess.

Never infer specifications solely from the series, chipset, or similar models.

The final JSON should maximize factual accuracy rather than completeness.

`
}


export { find_model_names_prompt, model_img_prompt, model_details_prompt, model_faqs_prompt, model_seo_prompt, model_spec_prompt }