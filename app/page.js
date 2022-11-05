// app/page.js
// This file maps to the index route (/)

async function generateAIImage(prompt){
    const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
      });
    
    if(!response.data) throw new Error('Unable to get image');
    return response.data.data[0].url;
}

export default function SearchPage() {
    return <div>Hello there !!!!</div>
}