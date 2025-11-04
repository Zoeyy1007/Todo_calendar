import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = Array.from({ length: 24 }, (_, i) =>
  `${String(i).padStart(2, "0")}:00`
);

export default function App() {
  return (
    <div className="min-h-screen bg-pageBg text-black">
      
      {/* HEADER */}
      <header className="sticky top-0 z-10 bg-headerBg border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left controls */}
          <div className="flex items-center gap-4">
            <button className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-100">
              <span className="text-lg">◀</span>
            </button>

            <button className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-gray-100">
              <span className="text-lg">▶</span>
            </button>

            <h1 className="text-xl font-semibold">November 2025</h1>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ColorSquare color="#22c55e" />
            <ColorSquare color="#3b82f6" />
            <ColorSquare color="#f59e0b" />

            <button className="ml-4 rounded-lg bg-black text-white px-4 py-2 font-medium shadow-soft hover:bg-gray-800 transition">
              + New Event
            </button>
          </div>
        </div>
      </header>

      {/* CALENDAR GRID */}
      <main className="max-w-5xl mx-auto px-6 py-6">
        <CalendarGrid />
      </main>
    </div>
  );
}


/* -----------------------
   Calendar Layout
----------------------- */

function CalendarGrid() {
  return (
    <div className="border border-border rounded-xl2 overflow-hidden shadow-soft bg-white">

      {/* WEEKDAY HEADER */}
      <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-border">
        <div></div>
        {DAYS.map((d) => (
          <div
            key={d}
            className="px-4 py-3 text-center text-dayHeaderText font-medium"
          >
            {d}
          </div>
        ))}
      </div>

      {/* TIME + GRID */}
      {HOURS.map((hour, i) => (
        <div
          key={i}
          className="grid grid-cols-[80px_repeat(7,1fr)] border-t border-border"
        >
          {/* TIME LABEL */}
          <div className="px-4 py-4 text-sm text-timeText">{hour}</div>

          {/* 7 DAYS */}
          {DAYS.map((day) => (
            <div key={day} className="h-16 border-l border-border hover:bg-gray-50 transition-colors"></div>
          ))}
        </div>
      ))}
    </div>
  );
}


/* -----------------------
   Colored prepare toggles
----------------------- */

function ColorSquare({ color }: { color: string }) {
  return (
    <button
      className="h-5 w-5 rounded-md border border-border shadow-sm hover:opacity-80"
      style={{ backgroundColor: color }}
    />
  );
}