"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  X,
  MoreHorizontal,
  Check,
} from "lucide-react";
import StickerPeel from "@/components/StickerPeel";

const WorkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 1H7C7.26522 1 7.51957 1.10536 7.70711 1.29289C7.89464 1.48043 8 1.73478 8 2V3H10C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4V9.5C11 9.76522 10.8946 10.0196 10.7071 10.2071C10.5196 10.3946 10.2652 10.5 10 10.5H2C1.73478 10.5 1.48043 10.3946 1.29289 10.2071C1.10536 10.0196 1 9.76522 1 9.5V4C1 3.445 1.445 3 2 3H4V2C4 1.445 4.445 1 5 1ZM7 3V2H5V3H7Z" fill="#1D9B4A"/>
  </svg>
);

const ShoppingIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 3H3.525L2.97 1.34C2.93645 1.24069 2.87255 1.15443 2.78731 1.09342C2.70207 1.03241 2.59982 0.999731 2.49499 1H0.994995V2H2.135L3.90499 7.315C3.97123 7.51456 4.09867 7.68816 4.26922 7.81113C4.43977 7.9341 4.64474 8.00019 4.855 8H8.64999C8.85347 7.99965 9.05199 7.93723 9.21905 7.82109C9.38612 7.70494 9.51378 7.5406 9.585 7.35L10.965 3.675C10.9935 3.59964 11.0034 3.51849 10.9937 3.4385C10.984 3.35851 10.955 3.28206 10.9093 3.2157C10.8636 3.14934 10.8025 3.09505 10.7312 3.05749C10.6599 3.01992 10.5806 3.0002 10.5 3ZM5 9C4.73478 9 4.48043 9.10536 4.29289 9.2929C4.10535 9.48043 4 9.73479 4 10C4 10.2652 4.10535 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11C5.26521 11 5.51957 10.8946 5.7071 10.7071C5.89464 10.5196 6 10.2652 6 10C6 9.73479 5.89464 9.48043 5.7071 9.2929C5.51957 9.10536 5.26521 9 5 9ZM8.5 9C8.23478 9 7.98042 9.10536 7.79289 9.2929C7.60535 9.48043 7.5 9.73479 7.5 10C7.5 10.2652 7.60535 10.5196 7.79289 10.7071C7.98042 10.8946 8.23478 11 8.5 11C8.76521 11 9.01957 10.8946 9.2071 10.7071C9.39464 10.5196 9.5 10.2652 9.5 10C9.5 9.73479 9.39464 9.48043 9.2071 9.2929C9.01957 9.10536 8.76521 9 8.5 9Z" fill="#3170B6"/>
  </svg>
);

const HomeIconCustom = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 5.62502V10.125C10.5 10.2245 10.4605 10.3199 10.3902 10.3902C10.3198 10.4605 10.2245 10.5 10.125 10.5H7.5C7.40054 10.5 7.30516 10.4605 7.23483 10.3902C7.16451 10.3199 7.125 10.2245 7.125 10.125V7.68752C7.125 7.63779 7.10525 7.5901 7.07008 7.55494C7.03492 7.51977 6.98723 7.50002 6.9375 7.50002H5.0625C5.01277 7.50002 4.96508 7.51977 4.92992 7.55494C4.89475 7.5901 4.875 7.63779 4.875 7.68752V10.125C4.875 10.2245 4.83549 10.3199 4.76516 10.3902C4.69484 10.4605 4.59946 10.5 4.5 10.5H1.875C1.77554 10.5 1.68016 10.4605 1.60984 10.3902C1.53951 10.3199 1.5 10.2245 1.5 10.125V5.62502C1.50009 5.42614 1.57917 5.23544 1.71984 5.09486L5.46984 1.34486C5.61048 1.20432 5.80117 1.12537 6 1.12537C6.19883 1.12537 6.38952 1.20432 6.53016 1.34486L10.2802 5.09486C10.4208 5.23544 10.4999 5.42614 10.5 5.62502Z" fill="#D61710"/>
  </svg>
);

const TravelIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.38749 5.2L2.26249 3.85C2.06249 3.75833 1.93966 3.61033 1.89399 3.406C1.84832 3.20167 1.90449 3.0205 2.06249 2.8625L2.26249 2.6625C2.32916 2.59583 2.41049 2.54583 2.50649 2.5125C2.60249 2.47917 2.70032 2.47083 2.79999 2.4875L7.29999 3.2875L8.84999 1.725C9.04166 1.53333 9.27716 1.4375 9.55649 1.4375C9.83582 1.4375 10.0712 1.53333 10.2625 1.725C10.4538 1.91667 10.5497 2.15217 10.55 2.4315C10.5503 2.71083 10.4545 2.94617 10.2625 3.1375L8.71249 4.7L9.49999 9.1875C9.51666 9.2875 9.51032 9.3875 9.48099 9.4875C9.45166 9.5875 9.40382 9.67083 9.33749 9.7375L9.13749 9.925C8.97916 10.0833 8.79582 10.1417 8.58749 10.1C8.37916 10.0583 8.22916 9.9375 8.13749 9.7375L6.79999 6.6125L5.52499 7.875L5.79999 9.425C5.81666 9.50833 5.81249 9.58967 5.78749 9.669C5.76249 9.74833 5.72082 9.817 5.66249 9.875L5.44999 10.0875C5.33332 10.2042 5.18966 10.25 5.01899 10.225C4.84832 10.2 4.72116 10.1125 4.63749 9.9625L3.72499 8.275L2.03749 7.3625C1.88749 7.27917 1.79999 7.15217 1.77499 6.9815C1.74999 6.81083 1.79582 6.667 1.91249 6.55L2.12499 6.3375C2.18332 6.27917 2.25216 6.2375 2.33149 6.2125C2.41082 6.1875 2.49199 6.18333 2.57499 6.2L4.11249 6.4625L5.38749 5.2Z" fill="white"/>
  </svg>
);

const PersonalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6C7.105 6 8 5.105 8 4C8 2.895 7.105 2 6 2C4.895 2 4 2.895 4 4C4 5.105 4.895 6 6 6ZM6 7C4.665 7 2 7.67 2 9V9.5C2 9.775 2.225 10 2.5 10H9.5C9.775 10 10 9.775 10 9.5V9C10 7.67 7.335 7 6 7Z" fill="white"/>
  </svg>
);

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#0d0d0d] text-white">
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Navbar />
        <Hero />
        <ScreenMockup />
      </div>
    </main>
  );
}

function Navbar() {
  return (
    <nav className="relative mx-auto mt-7 flex h-[72px] w-[calc(100%-256px)] items-center justify-between rounded-xl border border-white/10 px-6">
      <Image
        src="/figma/logo.svg"
        alt="float."
        width={92}
        height={32}
        priority
      />

      <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-10 text-sm tracking-tight text-white/50">
        <li className="flex cursor-pointer items-center gap-1 hover:text-white/80">
          Product <ChevronDown className="h-3.5 w-3.5" />
        </li>
        <li className="cursor-pointer hover:text-white/80">How it works</li>
        <li className="cursor-pointer hover:text-white/80">Story</li>
        <li className="flex cursor-pointer items-center gap-1 hover:text-white/80">
          Resources <ChevronDown className="h-3.5 w-3.5" />
        </li>
      </ul>

      <button className="flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2.5 text-sm font-bold tracking-tight text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition hover:bg-white/15">
        <Image src="/figma/appstore.svg" alt="" width={20} height={20} />
        Get on App Store
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative mt-[60px] flex flex-col items-center text-center">
      <h1
        className="whitespace-nowrap text-[56px] leading-[72px] text-white"
        style={{ letterSpacing: "-3.36px" }}
      >
        Your thoughts,{" "}
        <span
          className="font-serif text-[64px] italic font-light"
          style={{ letterSpacing: "-3.84px" }}
        >
          captured beautifully.
        </span>
      </h1>

      <p className="mt-[18px] max-w-[420px] text-base leading-6 text-white/50">
        Float turns voice notes into clean transcripts, summaries, and action
        items - so your ideas never get lost.
      </p>

      <button className="group mt-[36px] flex items-center gap-2 rounded-lg bg-white px-4 py-3.5 text-sm font-bold tracking-tight text-[#0d0d0d] shadow-[0_4px_12px_rgba(0,0,0,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.75)]">
        <Image src="/figma/appstore.svg" alt="" width={20} height={20} />
        Get on App Store
        <ArrowRight
          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      </button>
    </section>
  );
}

function ScreenMockup() {
  return (
    <div className="relative mx-auto mt-[40px] h-[555px] w-[980px] rounded-[32px] border border-white/10 bg-white/[0.02] shadow-[0_4px_128px_rgba(0,0,0,0.75)]">
      <div className="pointer-events-none absolute inset-2 rounded-[24px] border border-white/15 shadow-[0_4px_32px_rgba(0,0,0,0.75)]" />

      <StickerPeel initialPosition={{ x: 24, y: 24 }}>
        <NoteCardWork />
      </StickerPeel>
      <StickerPeel initialPosition={{ x: 338, y: 72 }}>
        <NoteCardShopping />
      </StickerPeel>
      <StickerPeel initialPosition={{ x: 698, y: 24 }}>
        <NoteCardHome />
      </StickerPeel>
      <StickerPeel initialPosition={{ x: 658, y: 201 }}>
        <NoteCardTravel />
      </StickerPeel>
      <StickerPeel initialPosition={{ x: 46, y: 244 }}>
        <NoteCardPersonal />
      </StickerPeel>
      <RecordingBar />
    </div>
  );
}

function NoteCardWork() {
  return (
    <div className="relative h-[165px] w-[362px] rounded-xl bg-[#c0ffc3] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] font-semibold text-[#1d9b4a]">
          <WorkIcon />
          Work
        </div>
        <div className="flex items-center gap-1.5 text-[#1d9b4a]">
          <MoreHorizontal className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-5 max-w-[260px] text-2xl font-medium leading-7 text-[#1d9b4a]">
        Send invoices out to Viktor & Cassie.
      </p>
      <div className="mt-3 inline-flex items-center gap-0.5 rounded-full bg-[rgba(29,155,74,0.15)] px-3 py-1.5">
        <span className="text-xs font-semibold text-[#1d9b4a]">Go to email</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 text-[#1d9b4a]"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
}

function NoteCardShopping() {
  return (
    <div className="relative h-[230px] w-[222px] rounded-xl bg-[#a1eeff] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] font-semibold text-[#3170b6]">
          <ShoppingIcon />
          Shopping
        </div>
        <div className="flex items-center gap-1.5 text-[#3170b6]">
          <MoreHorizontal className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-7 text-base font-medium text-[#3170b6]">Need:</p>
      <ul className="mt-1 space-y-0 font-hand text-xl font-normal leading-7 text-[#3170b6]">
        <li>🥛 Oat milk</li>
        <li>🥚 Eggs</li>
        <li>☕ Coffee filters</li>
        <li>🍞 Bread</li>
      </ul>
    </div>
  );
}

function NoteCardHome() {
  return (
    <div className="relative h-[129px] w-[258px] rounded-xl bg-[#ffc4c3] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] font-semibold text-[#d61710]">
          <HomeIconCustom />
          Home
        </div>
        <div className="flex items-center gap-1.5 text-[#d61710]">
          <MoreHorizontal className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-5 max-w-[183px] text-base font-medium leading-5 text-[#d61710]">
        Buy batteries, replace the hallway bulb, and water the plants.
      </p>
    </div>
  );
}

function TravelCheckbox({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onPointerDown={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded transition ${
        checked
          ? "bg-white/85"
          : "border border-white/35 hover:border-white/60"
      }`}
      aria-pressed={checked}
    >
      {checked && <Check className="h-3 w-3 text-[#0d0d0d]" strokeWidth={3} />}
    </button>
  );
}

function NoteCardTravel() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    passports: false,
    transfer: true,
    maps: false,
  });
  const toggle = (key: string) =>
    setChecked((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="relative h-[320px] w-[258px] overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/figma/lisbon.png')" }}
      />
      <div className="absolute inset-0 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white">
            <TravelIcon />
            Travel
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <MoreHorizontal className="h-4 w-4" />
            <X className="h-4 w-4" />
          </div>
        </div>
        <p className="mt-9 text-xl font-medium leading-6 text-white">
          For Lisbon trip:
        </p>
        <ul className="mt-[18px] space-y-3.5">
          <li className="flex items-center gap-2 text-xs font-medium text-white">
            <TravelCheckbox checked={checked.passports} onToggle={() => toggle("passports")} />
            Check passports
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-white">
            <TravelCheckbox checked={checked.transfer} onToggle={() => toggle("transfer")} />
            Book airport transfer
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-white">
            <TravelCheckbox checked={checked.maps} onToggle={() => toggle("maps")} />
            <span className="flex items-center gap-1">
              Download offline maps
              <span className="flex items-center gap-0.5 rounded-full bg-white/15 px-1.5 py-0.5 text-[8px] backdrop-blur">
                Maps
                <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NoteCardPersonal() {
  return (
    <div className="relative h-[217px] w-[220px] overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/figma/person.png')" }}
      />
      <div className="absolute inset-0 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white">
            <PersonalIcon />
            Personal
          </div>
          <div className="flex items-center gap-1.5 text-white">
            <MoreHorizontal className="h-4 w-4" />
            <X className="h-4 w-4" />
          </div>
        </div>
        <p className="absolute bottom-4 left-4 right-4 text-base font-medium leading-5 text-white">
          Don&apos;t forget{" "}
          <span className="inline-flex items-center rounded bg-white/20 px-1.5 text-[10px] font-medium backdrop-blur">
            Emma
          </span>{" "}
          &apos;s birthday present!
        </p>
      </div>
    </div>
  );
}

function RecordingBar() {
  return (
    <div
      style={{ zIndex: 99999 }}
      className="absolute left-1/2 top-[341px] flex -translate-x-1/2 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.08] py-2 pl-3.5 pr-2 shadow-[0_8px_48px_rgba(0,0,0,0.65)] backdrop-blur"
    >
      <span className="text-xs text-white/75">Let&apos;s record a note!</span>
      <div className="flex items-center gap-[3px]">
        <Key label="command" symbol="⌘" wide />
        <Key label="option" symbol="⌥" />
        <Key label="" symbol="Y" />
      </div>
    </div>
  );
}

function Key({
  symbol,
  label,
  wide,
}: {
  symbol: string;
  label: string;
  wide?: boolean;
}) {
  const widthClass = wide ? "w-10" : "w-8";
  const base =
    "relative flex h-8 rounded-[3px] bg-gradient-to-b from-white/5 to-white/[0.02] shadow-[inset_0_0.5px_0_rgba(255,255,255,0.2),inset_0_-0.5px_0_rgba(0,0,0,0.25),0_8px_24px_rgba(0,0,0,0.4)]";

  if (!label) {
    return (
      <div
        className={`${base} ${widthClass} items-center justify-center font-medium text-[#d8d8d8]`}
      >
        <span className="text-[10px] leading-none">{symbol}</span>
      </div>
    );
  }

  return (
    <div
      className={`${base} ${widthClass} flex-col items-center justify-end`}
    >
      <span className="absolute right-1 top-1 text-[7px] text-[#d8d8d8]">
        {symbol}
      </span>
      <span className="mb-[3px] text-[7px] font-medium text-[#d8d8d8]">
        {label}
      </span>
    </div>
  );
}
