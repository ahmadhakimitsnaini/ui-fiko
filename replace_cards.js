const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// The new card classes
const newCardClasses = "bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300";

// Replace large cards with bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] in Hero section
content = content.replace(/bg-white\/5 backdrop-blur-xl p-8 rounded-\[2rem\] border border-white\/10 shadow-xl hover:shadow-\[.*?\] hover:-translate-y-2 hover:border-(?:pink|rose)-500\/30 hover:bg-white\/10 transition-all duration-300 flex flex-col/g, newCardClasses + " flex flex-col");

// Replace Empathize cards
content = content.replace(/bg-white\/5 backdrop-blur-xl p-8 rounded-\[2rem\] border border-white\/10 shadow-xl hover:-translate-y-1 hover:border-(?:pink|rose)-500\/30 transition-all duration-300/g, newCardClasses);

// Replace Define card
content = content.replace(/p-10 bg-white\/5 backdrop-blur-xl rounded-\[2rem\] border border-white\/10 shadow-2xl text-left text-sm max-w-4xl mx-auto hover:border-pink-500\/30 transition-colors duration-500/g, "p-10 text-left text-sm max-w-4xl mx-auto " + newCardClasses);

// Replace Ideate iframe containers
content = content.replace(/w-full aspect-\[21\/9\] bg-white\/5 backdrop-blur-md rounded-\[2rem\] shadow-2xl border border-white\/10 overflow-hidden hover:border-pink-500\/50 transition-colors duration-500/g, "w-full aspect-[21/9] bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] shadow-2xl border border-rose-500/20 overflow-hidden hover:border-pink-500/40 transition-all duration-500");

// Replace Test cards
content = content.replace(/bg-white\/5 backdrop-blur-xl p-6 rounded-\[2rem\] border border-white\/10 shadow-2xl text-center hover:border-pink-500\/30 transition-colors/g, "bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-6 rounded-[2rem] border border-rose-500/20 shadow-2xl text-center hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300");

content = content.replace(/bg-white\/5 backdrop-blur-xl p-8 rounded-\[2rem\] border border-white\/10 shadow-2xl overflow-x-auto hover:border-pink-500\/30 transition-colors/g, "bg-gradient-to-br from-[#4f0b20] to-[#b81040] p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl overflow-x-auto hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300");

// Feedback cards
content = content.replace(/p-8 bg-white\/5 backdrop-blur-xl rounded-\[2rem\] shadow-2xl border border-white\/10 hover:border-pink-500\/30 transition-colors/g, "p-8 " + newCardClasses);

// Design Goals Card
content = content.replace(/bg-white\/5 backdrop-blur-xl border border-white\/10 shadow-2xl p-8 rounded-\[2rem\] space-y-6 hover:border-pink-500\/30 transition-colors duration-500/g, "bg-gradient-to-br from-[#4f0b20] to-[#b81040] border border-rose-500/20 shadow-2xl p-8 rounded-[2rem] space-y-6 hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300");

// Define Red/Pink specific cards
content = content.replace(/bg-red-950\/20 backdrop-blur-xl rounded-\[2rem\] border border-red-500\/20 shadow-xl hover:-translate-y-1 hover:border-red-500\/40 transition-all duration-300/g, "bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300");
content = content.replace(/bg-pink-950\/20 backdrop-blur-xl rounded-\[2rem\] border border-pink-500\/20 shadow-xl hover:-translate-y-1 hover:border-pink-500\/40 transition-all duration-300/g, "bg-gradient-to-br from-[#4f0b20] to-[#b81040] rounded-[2rem] border border-rose-500/20 shadow-2xl hover:-translate-y-1 hover:border-pink-500/40 transition-all duration-300");

// Modify the Icons in Hero to look like VS Code icon (white background, rounded square)
content = content.replace(/w-14 h-14 rounded-2xl bg-(?:pink|rose)-500\/20 text-(?:pink|rose)-400/g, "w-14 h-14 rounded-2xl bg-white text-rose-600 shadow-[0_4px_10px_rgba(0,0,0,0.3)]");

fs.writeFileSync('app/page.tsx', content);
console.log('Cards replaced');
