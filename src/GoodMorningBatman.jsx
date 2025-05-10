import { useState, useEffect } from "react";

const batmanQuotes = [
  "It's not who I am underneath, but what I do that defines me.",
  "I have one power. I never give up.",
  "A hero can be anyone. Even a man doing something as simple as reassuring as putting a coat around a young boy’s shoulders.",
  "You either die a hero or you live long enough to see yourself become the villain.",
  "Endure, Master Wayne. Take it. They'll hate you for it, but that's the point of Batman.",
  "Sometimes it's only madness that makes us what we are.",
  "I'm whatever Gotham needs me to be.",
  "I wear a mask. And that mask, it's not to hide who I am, but to create what I am.",
  "All men have limits. They learn what they are and learn not to exceed them. I ignore mine.",
  "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
  "You think darkness is your ally. But you merely adopted the dark; I was born in it, molded by it.",
  "I won't kill you... but I don't have to save you.",
  "Fear is a tool. When that light hits the sky, it's not just a call. It's a warning.",
  "Justice is about more than revenge. It's about setting things right.",
  "You want to know something funny? Even after everything you've done, I would have saved you.",
  "I'm vengeance.",
  "Sometimes the truth isn’t good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded.",
  "The world only makes sense if you force it to.",
  "People need dramatic examples to shake them out of apathy."
];

function getGreetingAndMessage() {
  const hour = new Date().getHours();
  let greeting = "";
  let extraMessage = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    extraMessage = "I hope you had your nuts breakfast and morning coffee ☕🥜";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Noon";
    extraMessage = "I hope you enjoyed idli or dosa before going to office 🍽️";
  } else if (hour === 15) {
    greeting = "Good Afternoon";
    extraMessage = "I hope you had your lunch by now 🍛";
  } else if (hour === 16) {
    greeting = "Good Afternoon";
    extraMessage = "I know your day is full of meetings but still don't forget to drink water 💧 and move! Maybe grab a coffee ☕";
  } else if (hour >= 17 && hour < 19) {
    greeting = "Good Evening";
    extraMessage = "I hope you have merged your PRs and you're done for the day! 🎯";
  } else if (hour >= 19 && hour < 22) {
    greeting = "Good Evening";
    extraMessage = "I hope you had your evening snacks 🍪 and your side projects, studies, and everything else are going great!";
  } else if (hour >= 22 || hour < 5) {
    greeting = "Good Night";
    extraMessage = "I think you should go to sleep now 🛌💤";
  }

  return { greeting, extraMessage };
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * batmanQuotes.length);
  return batmanQuotes[randomIndex];
}

export default function GoodMorningBatman() {
  const [quote, setQuote] = useState("");
  const [greeting, setGreeting] = useState("");
  const [extraMessage, setExtraMessage] = useState("");

  useEffect(() => {
    const { greeting, extraMessage } = getGreetingAndMessage();
    setGreeting(greeting);
    setExtraMessage(extraMessage);
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 font-mono text-center p-8">
      <h1 className="text-4xl font-bold mb-6">🦇 {greeting}, Vivek!</h1>
      <p className="text-lg mb-4 italic">"{quote}"</p>
      <p className="text-md mt-6">{extraMessage}</p>
      <p className="mt-10 text-xs text-gray-400">- Batman, somewhere watching Gotham</p>
    </div>
  );
}
