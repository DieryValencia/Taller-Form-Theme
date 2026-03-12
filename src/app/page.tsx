"use client";

import React, { useState } from "react";
import { ChevronDown, Play, Sparkles, Sun, Image as ImageIcon } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState("Light");
  const [accent, setAccent] = useState("purple");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQuality, setHighQuality] = useState(false);

  // Accent colors
  const accentColors = [
    { name: "red", class: "bg-[#ff6b6b]", ringClass: "ring-[#ff6b6b]" },
    { name: "orange", class: "bg-[#feca57]", ringClass: "ring-[#feca57]" },
    { name: "green", class: "bg-[#1dd1a1]", ringClass: "ring-[#1dd1a1]" },
    { name: "teal", class: "bg-[#48dbfb]", ringClass: "ring-[#48dbfb]" },
    { name: "blue", class: "bg-[#54a0ff]", ringClass: "ring-[#54a0ff]" },
    { name: "purple", class: "bg-[#c56cf0]", ringClass: "ring-[#c56cf0]" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      {/* Main Card */}
      <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[460px] p-8 space-y-6 text-gray-900 ring-1 ring-gray-100">
        
        {/* Header Section */}
        <div>
          <h1 className="text-[22px] font-bold tracking-tight text-[#2d3748]">Appearance</h1>
          <p className="text-[14px] text-gray-500 mt-0.5 font-medium">Set or customize your preferences for the system</p>
        </div>

        <hr className="border-gray-100" />

        {/* Language Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-[#2d3748]">Language</h2>
            <p className="text-[14px] text-gray-500 mt-0.5 font-medium">Select the language of the platform</p>
          </div>
          <button className="flex items-center gap-4 px-3.5 py-2 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 rounded-[10px] shadow-sm hover:bg-gray-50 transition-colors h-10">
            English
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <hr className="border-gray-100" />

        {/* Interface Theme Section */}
        <div>
          <h2 className="text-[18px] font-bold text-[#2d3748]">Interface theme</h2>
          <p className="text-[14px] text-gray-500 mt-0.5 font-medium">Customize your application appearance</p>
          
          <div className="grid grid-cols-3 gap-3 mt-5">
            {/* Auto Theme Card */}
            <button
              onClick={() => setTheme("Auto")}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className={`w-full aspect-[4/3] rounded-[14px] border-[2px] flex overflow-hidden relative cursor-pointer ${
                  theme === "Auto" ? "border-indigo-500 bg-indigo-50/50" : "border-gray-200"
                }`}
              >
                {/* Auto split background */}
                <div className="w-1/2 h-full bg-white flex flex-col p-2.5 gap-1.5 border-r border-gray-100 relative">
                  <div className="w-full h-1/2 bg-indigo-100 rounded-[4px]"></div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-sm mt-1"></div>
                  <div className="w-3/4 h-1.5 bg-gray-100 rounded-sm"></div>
                  
                  {/* Diagonal cut overlay visual effect (simulated with a gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                </div>
                <div className="w-1/2 h-full bg-gray-100 flex flex-col p-2.5 gap-1.5">
                  <div className="w-full h-1/2 bg-gray-200 rounded-[4px]"></div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-sm mt-1"></div>
                  <div className="w-3/4 h-1.5 bg-gray-200 rounded-sm"></div>
                </div>
              </div>
              <span className={`text-[14px] font-semibold ${theme === "Auto" ? "text-indigo-600" : "text-gray-500 group-hover:text-gray-700"}`}>Auto</span>
            </button>

            {/* Light Theme Card */}
            <button
              onClick={() => setTheme("Light")}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className={`w-full aspect-[4/3] rounded-[14px] border-[2px] bg-white flex p-2.5 gap-2.5 relative cursor-pointer ${
                  theme === "Light" ? "border-[#6259f5]" : "border-gray-200"
                }`}
              >
                <div className="w-[30%] h-full bg-gray-100 rounded-[4px]"></div>
                <div className="flex-1 flex flex-col gap-2 mt-0.5">
                  <div className="w-[90%] h-2 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-sm mt-1"></div>
                  <div className="w-2/3 h-1.5 bg-gray-100 rounded-sm"></div>
                </div>
                {theme === "Light" && (
                  <div className="absolute bottom-1.5 left-1.5 w-[14px] h-[14px] bg-[#6259f5] rounded-full border-[2px] border-white"></div>
                )}
              </div>
              <span className={`text-[14px] font-semibold ${theme === "Light" ? "text-[#6259f5]" : "text-gray-500 group-hover:text-gray-700"}`}>Light</span>
            </button>

            {/* Dark Theme Card */}
            <button
              onClick={() => setTheme("Dark")}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className={`w-full aspect-[4/3] rounded-[14px] border-[2px] cursor-pointer bg-[#6259f5] flex p-2.5 gap-2.5 ${
                  theme === "Dark" ? "border-purple-300 ring-2 ring-[#6259f5] ring-offset-1" : "border-transparent"
                }`}
              >
                <div className="w-[30%] h-full bg-[#827bf7] rounded-[4px]"></div>
                <div className="flex-1 flex flex-col gap-2 mt-0.5">
                  <div className="w-[90%] h-2 bg-[#827bf7] rounded-sm"></div>
                  <div className="w-full h-1.5 bg-[#827bf7] opacity-60 rounded-sm mt-1"></div>
                  <div className="w-2/3 h-1.5 bg-[#827bf7] opacity-60 rounded-sm"></div>
                </div>
              </div>
              <span className={`text-[14px] font-semibold ${theme === "Dark" ? "text-[#6259f5]" : "text-gray-500 group-hover:text-gray-700"}`}>Dark</span>
            </button>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Accent Color Section */}
        <div className="flex items-center justify-between pb-1">
          <div>
            <h2 className="text-[18px] font-bold text-[#2d3748]">Accent color</h2>
            <p className="text-[14px] text-gray-500 mt-0.5 font-medium">Pick your platform&apos;s main color</p>
          </div>
          <div className="flex gap-2">
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setAccent(color.name)}
                className={`w-5 h-5 rounded-full ${color.class} ${
                  accent === color.name ? `ring-2 ring-offset-2 ${color.ringClass}` : ""
                }`}
                aria-label={`Select ${color.name} accent`}
              />
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Toggles List */}
        <div className="space-y-4 pt-1 pb-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-gray-400" />
              <span className="text-[18px] font-bold text-[#2d3748]">Reduce motion</span>
            </div>
            <button 
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`w-[46px] h-6 rounded-full transition-colors relative flex items-center ${reduceMotion ? 'bg-[#6259f5]' : 'bg-gray-200'}`}
            >
              <div className={`w-[20px] h-[20px] bg-white rounded-full transition-transform absolute shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${reduceMotion ? 'translate-x-[24px]' : 'translate-x-[2px]'}`}></div>
            </button>
          </div>

          <hr className="border-gray-50" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Play className="w-5 h-5 text-gray-400 stroke-[2px] fill-transparent" />
              <span className="text-[18px] font-bold text-[#2d3748]">Auto play</span>
            </div>
            <button 
              onClick={() => setAutoPlay(!autoPlay)}
              className={`w-[46px] h-6 rounded-full transition-colors relative flex items-center ${autoPlay ? 'bg-[#6259f5]' : 'bg-gray-200'}`}
            >
              <div className={`w-[20px] h-[20px] bg-white rounded-full transition-transform absolute shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${autoPlay ? 'translate-x-[24px]' : 'translate-x-[2px]'}`}></div>
            </button>
          </div>

          <hr className="border-gray-50" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-5 h-5 text-gray-400 stroke-[2px]" />
              <span className="text-[18px] font-bold text-[#2d3748]">High quality photo</span>
            </div>
            <button 
              onClick={() => setHighQuality(!highQuality)}
              className={`w-[46px] h-6 rounded-full transition-colors relative flex items-center ${highQuality ? 'bg-[#6259f5]' : 'bg-gray-200'}`}
            >
              <div className={`w-[20px] h-[20px] bg-white rounded-full transition-transform absolute shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${highQuality ? 'translate-x-[24px]' : 'translate-x-[2px]'}`}></div>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3">
          <button className="text-[14px] font-semibold text-gray-500 hover:text-gray-800 transition-colors">
            Reset to default
          </button>
          <div className="flex gap-2">
            <button className="px-5 py-2.5 text-[14px] font-bold text-gray-700 bg-white border border-gray-200 rounded-[10px] hover:bg-gray-50 transition-colors hover:border-gray-300">
              Cancel
            </button>
            <button className="px-5 py-2.5 text-[14px] font-bold text-white bg-[#6259f5] rounded-[10px] hover:bg-indigo-600 transition-colors shadow-sm">
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
