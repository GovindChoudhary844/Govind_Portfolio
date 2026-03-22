// packagesAPI.js
const packagesAPI = [
  {
    id: 1,
    name: "Smart Asset Architect",
    subname: "Unity Editor Tool",
    downloadLink:
      "https://drive.google.com/file/d/1Vj61CN76pGDNr5UwnPSPQTZMr8wcWleH/view?usp=sharing", // Replace with your link
    description: [
      "Automated Domain Routing: Intelligently organizes messy Unity projects by isolating assets into feature-specific folders.",
      "Static Code Analysis: Parses C# scripts using Regex to read namespaces, automatically grouping code files into their correct architectural domains.",
      "100% Safe Asset Migration: Utilizes Unity's AssetDatabase API to move files, guaranteeing .meta files are preserved and references never break.",
      "Persistent Undo Memory: Custom JSON save system to track movements, allowing reverts even after restarting Unity.",
      "Advanced Editor UX: Dynamic custom Editor Window featuring a real-time folder tree preview and search filtering.",
      "Third-Party Package Protection: Customizable 'Ignore List' dashboard to safely lock down imported SDKs and prevent dependency breaks.",
    ],
    image: "Images/Packages/Smart_Asset_Architect/SS1.png", // Add your preview image path
    imagesDesktop: [
      "Images/Packages/Smart_Asset_Architect/SS1.png",
      "Images/Packages/Smart_Asset_Architect/SS2.png",
      "Images/Packages/Smart_Asset_Architect/SS3.png",
    ],
  },
];

export default packagesAPI;
