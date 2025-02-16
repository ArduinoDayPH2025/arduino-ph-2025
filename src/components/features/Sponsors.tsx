// SponsorsPage.tsx
import React from 'react';
import { sponsors } from "@/data/index";

// types.ts
interface Sponsor {
    name: string;
    logo: string;
  }
  
interface SponsorsData {
platinum: Sponsor[];
gold: Sponsor[];
silver: Sponsor[];
community: Sponsor[];
}

interface SectionDividerProps {
title: string;
}

// Section divider component
const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
    return (
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative">
          <span className="bg-black px-[4px] text-sm lg:px-6 sm:text-lg text-gray-300">
            {title}
          </span>
        </div>
      </div>
    );
  };
  

const Sponsors: React.FC = () => {
const sponsorsData: SponsorsData = sponsors;

return (
    // Added a margin top to the div so it doesn't overlap with the speakers section, feel free to adjust the value
    <div className="relative max-h-max sm:h-[1341px] bg-black text-white px-[22px] sm:px-[50px] lg:px-[122px] mt-32">
        {/* For Desktop */}
        <div className="max-w-6xl mx-auto lg:block hidden">
            {/* Header */}
            <div className=' flex justify-center items-center mb-11'>
                <h2>
                    Special Thanks To Our <span className="text-orange-500">Sponsors And Partners</span>
                </h2>
            </div>

            {/* Platinum Sponsors */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Platinum Sponsors" />
                <div className='h-[292px] flex justify-center items-center'>
                    <div className=" grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto">
                        {/* iAcademy */}
                        <div className="col-start-2 col-span-3 row-start-1 row-span-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[0].logo}
                            alt={sponsorsData.platinum[0].name}
                            className=" max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Packetworx */}
                        <div className="col-start-5 col-span-4 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[1].logo}
                            alt={sponsorsData.platinum[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Superteam */}
                        <div className="col-start-9 col-span-4 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[2].logo}
                            alt={sponsorsData.platinum[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Solana */}
                        <div className="col-start-5 col-span-4 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[3].logo}
                            alt={sponsorsData.platinum[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* The Bl0ck */}
                        <div className="col-start-9 col-span-3 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[4].logo}
                            alt={sponsorsData.platinum[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                    </div>
                </div>
            </div>


            {/* Gold Sponsors */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Gold Sponsors" />
                <div className='h-[280px] flex justify-center items-center'>
                    <div className="grid grid-cols-12 auto-rows-min gap-0 w-full max-w-4xl mx-auto py-6 relative">
                        {/* PLDT (gold[0]) */}
                        <div className="col-start-3 col-span-3 row-start-1 row-span-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[0].logo}
                            alt={sponsorsData.gold[0].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Anonimouse (gold[1]) */}
                        <div className="col-start-6 col-span-1 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[1].logo}
                            alt={sponsorsData.gold[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Alert (gold[2]) */}
                        <div className="col-start-7 col-span-2 row-start-1 flex items-center justify-center mt-2 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[2].logo}
                            alt={sponsorsData.gold[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* DICT (gold[3]) */}
                        <div className="col-start-9 col-span-3 row-start-1 row-span-2 flex items-start justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[3].logo}
                            alt={sponsorsData.gold[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Electrogics (gold[4]) */}
                        <div className="col-start-6 col-span-1 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[4].logo}
                            alt={sponsorsData.gold[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Appkademiya (gold[5]) */}
                        <div className="col-start-7 col-span-2 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[5].logo}
                            alt={sponsorsData.gold[5].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>
                    </div>
                </div>
            </div>


            {/* Silver Sponsors */}
            {sponsorsData.silver.length > 0 && (
                <div className="relative">
                    <SectionDivider title="Silver Sponsors" />
                    <div className="h-[292px] flex flex-wrap justify-center">
                        <div className="relative flex justify-center items-center gap-16 w-full">
                            {sponsorsData.silver.map((sponsor: Sponsor, index: number) => (
                                <div 
                                    key={sponsor.name}
                                    className="absolute w-[195px] h-[100px] px-[33px] py-[15px] flex items-center justify-center"
                                    style={{
                                        top: index < 3 ? '41px' : '137px',
                                        left: `${133 + (index % 3) * 295}px`
                                    }}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Community Partners */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Community Partners" />
                <div className='h-[230px] flex justify-center items-center'>
                    <div className="grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto py-6">
                            <div
                            className="
                                col-start-4 col-span-3 row-start-1
                                flex items-center justify-center
                            "
                            >
                                <img
                                    src={sponsorsData.community[0].logo}
                                    alt={sponsorsData.community[0].name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div
                            className="
                                col-start-7 col-span-3 row-start-1
                                flex items-center justify-center
                            "
                            >
                                <img
                                    src={sponsorsData.community[1].logo}
                                    alt={sponsorsData.community[1].name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                    </div>
                </div>
            </div>

        </div>

        {/* For Tablet */}
        <div className="max-w-6xl mx-auto hidden sm:block lg:hidden">
            {/* Header */}
            <div className='flex justify-center items-center mb-9'>
                <h2 className='text-3xl text-center'>
                    Special Thanks To Our <span className="text-orange-500">Sponsors And Partners</span>
                </h2>
            </div>

            {/* Platinum Sponsors */}
            <div className="relative">
                <SectionDivider title="Platinum Sponsors" />
                <div className="grid grid-cols-6 gap-4">
                    {/* Iacademy */}
                    <div className="col-span-2 h-40 flex items-center justify-center p-4 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[0].logo}
                            alt={sponsorsData.platinum[0].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* packetworxs */}
                    <div className="col-span-2 h-40 flex items-center justify-center p-4 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[1].logo}
                            alt={sponsorsData.platinum[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* super team */}
                    <div className="col-span-2 h-40 flex items-center justify-center p-4 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[2].logo}
                            alt={sponsorsData.platinum[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* solana */}
                    <div className="col-span-3 h-32 flex items-center justify-center p-4 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[3].logo}
                            alt={sponsorsData.platinum[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* block */}
                    <div className="col-span-3 h-32 flex items-center justify-center p-4 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[4].logo}
                            alt={sponsorsData.platinum[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Gold Sponsors */}
            <div className="relative mt-8">
                <SectionDivider title="Gold Sponsors" />
                <div className="grid grid-cols-12 gap-4 py-8">
                    {/* PLDT */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[0].logo}
                            alt={sponsorsData.gold[0].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* anonimouse */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[1].logo}
                            alt={sponsorsData.gold[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* Alert */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[2].logo}
                            alt={sponsorsData.gold[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* DICT */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[3].logo}
                            alt={sponsorsData.gold[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* Electrogics */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[4].logo}
                            alt={sponsorsData.gold[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* Appkademiya */}
                    <div className="col-span-4 h-24 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.gold[5].logo}
                            alt={sponsorsData.gold[5].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Silver Sponsors */}
            {sponsorsData.silver.length > 0 && (
                <div className="relative mt-8">
                    <SectionDivider title="Silver Sponsors" />
                    <div className="grid grid-cols-3 gap-4 py-8">
                        {sponsorsData.silver.map((sponsor: Sponsor) => (
                            <div 
                                key={sponsor.name}
                                className="h-28 flex items-center justify-center p-4"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Community Partners */}
            <div className="relative mt-8">
                <SectionDivider title="Community Partners" />
                <div className="grid grid-cols-2 gap-4 py-8">
                    {/* Community Partner 1 */}
                    <div className="h-32 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.community[0].logo}
                            alt={sponsorsData.community[0].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    {/* Community Partner 2 */}
                    <div className="h-32 flex items-center justify-center p-4">
                        <img
                            src={sponsorsData.community[1].logo}
                            alt={sponsorsData.community[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* For Mobile */}
        <div className="max-w-6xl mx-auto block sm:hidden ">
            {/* Header */}
            <div className='justify-center items-center mb-6'>
                <h2 className='text-[31px]'>
                    Special Thanks To Our <span className="text-orange-500">Sponsors And Partners</span>
                </h2>
            </div>

            {/* Platinum Sponsors */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Platinum Sponsors" />
                <div className='h-[135px] flex justify-center items-center'>
                    <div className=" grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto">
                        {/* iAcademy */}
                        <div className="col-start-2 col-span-2 row-start-1 row-span-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[0].logo}
                            alt={sponsorsData.platinum[0].name}
                            className=" max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Packetworx */}
                        <div className="col-start-4 col-span-4 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[1].logo}
                            alt={sponsorsData.platinum[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Superteam */}
                        <div className="col-start-8 col-span-4 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[2].logo}
                            alt={sponsorsData.platinum[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Solana */}
                        <div className="col-start-4 col-span-4 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[3].logo}
                            alt={sponsorsData.platinum[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* The Bl0ck */}
                        <div className="col-start-8 col-span-3 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.platinum[4].logo}
                            alt={sponsorsData.platinum[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>
                    </div>
                </div>
            </div>


            {/* Gold Sponsors */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Gold Sponsors" />
                <div className='h-[110px] flex justify-center items-center'>
                    <div className="grid grid-cols-12 auto-rows-min gap-0 w-full max-w-4xl mx-auto py-6 relative">
                        {/* PLDT (gold[0]) */}
                        <div className="col-start-3 col-span-3 row-start-1 row-span-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[0].logo}
                            alt={sponsorsData.gold[0].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Anonimouse (gold[1]) */}
                        <div className="col-start-6 col-span-1 row-start-1 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[1].logo}
                            alt={sponsorsData.gold[1].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Alert (gold[2]) */}
                        <div className="col-start-7 col-span-2 row-start-1 flex items-center justify-center mt-2 hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[2].logo}
                            alt={sponsorsData.gold[2].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* DICT (gold[3]) */}
                        <div className="col-start-10 row-start-1 row-span-2 flex items-start justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[3].logo}
                            alt={sponsorsData.gold[3].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Electrogics (gold[4]) */}
                        <div className="col-start-6 col-span-1 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[4].logo}
                            alt={sponsorsData.gold[4].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>

                        {/* Appkademiya (gold[5]) */}
                        <div className="col-start-7 col-span-2 row-start-2 flex items-center justify-center hover:border-2 rounded-3xl border-primary">
                        <img
                            src={sponsorsData.gold[5].logo}
                            alt={sponsorsData.gold[5].name}
                            className="max-w-full max-h-full object-contain"
                        />
                        </div>
                    </div>
                </div>
            </div>


            {/* Silver Sponsors */}
            {sponsorsData.silver.length > 0 && (
                <div className="relative">
                    <SectionDivider title="Silver Sponsors" />
                    <div className="h-[292px] flex flex-wrap justify-center">
                        <div className="relative flex justify-center items-center gap-16 w-full">
                            {sponsorsData.silver.map((sponsor: Sponsor, index: number) => (
                                <div 
                                    key={sponsor.name}
                                    className="absolute w-[195px] h-[100px] px-[33px] py-[15px] flex items-center justify-center"
                                    style={{
                                        top: index < 3 ? '41px' : '137px',
                                        left: `${133 + (index % 3) * 295}px`
                                    }}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Community Partners */}
            <div className="relative flex flex-col justify-center items-center">
                <SectionDivider title="Community Partners" />
                <div className='h-[90px] flex justify-center items-center'>
                    <div className="grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto py-6">
                            <div
                            className="
                                col-start-4 col-span-3 row-start-1
                                flex items-center justify-center
                            "
                            >
                                <img
                                    src={sponsorsData.community[0].logo}
                                    alt={sponsorsData.community[0].name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div
                            className="
                                col-start-7 col-span-3 row-start-1
                                flex items-center justify-center
                            "
                            >
                                <img
                                    src={sponsorsData.community[1].logo}
                                    alt={sponsorsData.community[1].name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
  
  export default Sponsors;