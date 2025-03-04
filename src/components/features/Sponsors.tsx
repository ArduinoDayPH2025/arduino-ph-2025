'use client'
// Sponsors.tsx
import React, {useState} from 'react';
import { sponsors } from "@/data/index";
import GlowingTextOrange from '../ui/glowing-text-orange';

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

interface SponsorTierProps {
  title: string;
  sponsors: Sponsor[];
  layout: "platinum" | "gold" | "silver" | "community";
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

// Reusable sponsor logo component
const SponsorLogo: React.FC<{ sponsor: Sponsor; className?: string }> = ({
    sponsor,
    className,
  }) => {
    return (
      <div
        // Outer container handles scaling on hover + "group" so children can react
        className={`
          group relative inline-flex items-center justify-center
          overflow-hidden
          transition-transform duration-300
          hover:scale-105
          ${className ?? ''}
        `}
      >
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-b from-green-300 to-orange-500
            p-[2px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        >
          <div className="w-full h-full bg-[#0f0f0f] rounded-2xl" />
        </div>
  
        {/* Actual content on top */}
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="relative z-10 max-w-full max-h-full object-contain"
        />
      </div>
    );
  };

// Reusable tier component that adapts to different layouts
const SponsorTier: React.FC<SponsorTierProps> = ({ title, sponsors, layout }) => {
    // Return early if no sponsors
    if (sponsors.length === 0 && layout !== "community") {
      return null;
    }
  
    // Define layout-specific configurations for responsive design
    type StandardLayout = {
      containerClass: string;
      gridClass: string;
      logoLayouts: string[];
      renderCustom?: false;
    };
    
    type CustomLayout = {
      containerClass: string;
      gridClass: string;
      renderCustom: true;
      getCustomContent: (sponsors: Sponsor[]) => React.ReactNode;
    };
    
    type LayoutConfig = {
      desktop: StandardLayout | CustomLayout;
      tablet: StandardLayout | CustomLayout;
      mobile: StandardLayout | CustomLayout;
    };
    
    // Layout configurations for each sponsors logo
    const layoutConfigs: Record<SponsorTierProps['layout'], LayoutConfig> = {
      platinum: {
        desktop: {
          containerClass: "h-max py-12",
          gridClass: "grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto",
          logoLayouts: [
            "col-start-1 col-span-3 row-start-1 row-span-2", // iAcademy
            "col-start-4 col-span-4 row-start-1", // Packetworx
            "col-start-8 col-span-4 row-start-1", // Superteam
            "col-start-4 col-span-4 row-start-2", // Solana
            "col-start-8 col-span-3 row-start-2", // The Bl0ck
          ]
        },
        tablet: {
          containerClass: "",
          gridClass: "grid grid-cols-6 gap-4",
          logoLayouts: [
            "col-span-2 h-40 p-4", // iAcademy
            "col-span-2 h-40 p-4", // Packetworx
            "col-span-2 h-40 p-4", // Superteam
            "col-span-3 h-32 p-4", // Solana
            "col-span-3 h-32 p-4", // The Bl0ck
          ]
        },
        mobile: {
          containerClass: "h-[135px]",
          gridClass: "grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto",
          logoLayouts: [
            "col-start-2 col-span-2 row-start-1 row-span-2", // iAcademy
            "col-start-4 col-span-4 row-start-1", // Packetworx
            "col-start-8 col-span-4 row-start-1", // Superteam
            "col-start-4 col-span-4 row-start-2", // Solana
            "col-start-8 col-span-3 row-start-2", // The Bl0ck
          ]
        }
      },
      gold: {
        desktop: {
          containerClass: "h-max py-10",
          gridClass: "grid grid-cols-12 auto-rows-min gap-0 w-full max-w-4xl mx-auto py-6 relative",
          logoLayouts: [
            "col-start-3 col-span-3 row-start-1 row-span-2", // PLDT
            "col-start-6 col-span-1 row-start-1", // Anonimouse
            "col-start-7 col-span-2 row-start-1 mt-2", // Alert
            "col-start-9 col-span-3 row-start-1 row-span-2", // DICT
            "col-start-6 col-span-1 row-start-2", // Electrogics
            "col-start-7 col-span-2 row-start-2", // Appkademiya
          ]
        },
        tablet: {
          containerClass: "mt-8",
          gridClass: "grid grid-cols-12 gap-4 py-8",
          logoLayouts: [
            "col-span-4 h-24 p-4", // PLDT
            "col-span-4 h-24 p-4", // Anonimouse
            "col-span-4 h-24 p-4", // Alert
            "col-span-4 h-24 p-4", // DICT
            "col-span-4 h-24 p-4", // Electrogics
            "col-span-4 h-24 p-4", // Appkademiya
          ]
        },
        mobile: {
          containerClass: "h-[110px]",
          gridClass: "grid grid-cols-12 auto-rows-min gap-0 w-full max-w-4xl mx-auto py-6 relative",
          logoLayouts: [
            "col-start-3 col-span-3 row-start-1 row-span-2", // PLDT
            "col-start-6 col-span-1 row-start-1", // Anonimouse
            "col-start-7 col-span-2 row-start-1 mt-2", // Alert
            "col-start-10 row-start-1 row-span-2", // DICT
            "col-start-6 col-span-1 row-start-2", // Electrogics
            "col-start-7 col-span-2 row-start-2", // Appkademiya
          ]
        }
      },
      silver: {
        desktop: {
          containerClass: "py-12",
          gridClass: "flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl mx-auto",
          renderCustom: true,
          getCustomContent: (sponsors: Sponsor[]) => (
            <>
              {sponsors.map((sponsor) => (
                <div 
                  key={sponsor.name}
                  className="w-[180px] h-[100px] flex items-center justify-center hover:border-2 rounded-3xl border-primary p-4"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </>
          )
        },
        tablet: {
          containerClass: "py-8",
          gridClass: "flex flex-wrap justify-center items-center gap-6 w-full",
          renderCustom: true,
          getCustomContent: (sponsors: Sponsor[]) => (
            <>
              {sponsors.map((sponsor) => (
                <div 
                  key={sponsor.name}
                  className="w-[160px] h-[90px] flex items-center justify-center hover:border-2 rounded-3xl border-primary p-3"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </>
          )
        },
        mobile: {
          containerClass: "py-6",
          gridClass: "flex flex-wrap justify-center items-center gap-4 w-full",
          renderCustom: true,
          getCustomContent: (sponsors: Sponsor[]) => (
            <>
              {sponsors.map((sponsor) => (
                <div 
                  key={sponsor.name}
                  className="w-[60px] h-[60px] flex items-center justify-center hover:border-2 rounded-3xl border-primary p-2"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </>
          )
        }
      },
      community: {
        desktop: {
          containerClass: "h-[230px] py-6",
          gridClass: "grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto py-6",
          logoLayouts: [
            "col-start-4 col-span-3 row-start-1",
            "col-start-7 col-span-3 row-start-1"
          ]
        },
        tablet: {
          containerClass: "mt-8",
          gridClass: "grid grid-cols-2 gap-4 py-8",
          logoLayouts: [
            "h-32 p-4",
            "h-32 p-4"
          ]
        },
        mobile: {
          containerClass: "h-[90px]",
          gridClass: "grid grid-cols-12 auto-rows-min gap-4 w-full max-w-4xl mx-auto py-6",
          logoLayouts: [
            "col-start-4 col-span-3 row-start-1",
            "col-start-7 col-span-3 row-start-1"
          ]
        }
      }
    };
  
    const renderLogos = (config: StandardLayout | CustomLayout, sponsors: Sponsor[]) => {
      if ('renderCustom' in config && config.renderCustom) { // if render custom content like silver sponsors
        return config.getCustomContent(sponsors);
      } else if ('logoLayouts' in config) {
        return sponsors.map((sponsor, index) => {
          if (index < config.logoLayouts.length) {
            return (
              <SponsorLogo 
                key={sponsor.name}
                sponsor={sponsor}
                className={config.logoLayouts[index]}
              />
            );
          }
          return null;
        });
      }
      return null;
    };
  
    return (
      <div className="relative flex flex-col justify-center items-center">
        <SectionDivider title={title} />
        
        {/* Desktop */}
        <div className={`${layoutConfigs[layout].desktop.containerClass} justify-center items-center lg:block hidden`}>
          <div className={layoutConfigs[layout].desktop.gridClass}>
            {renderLogos(layoutConfigs[layout].desktop, sponsors)}
          </div>
        </div>
        
        {/* Tablet */}
        <div className={`${layoutConfigs[layout].tablet.containerClass} hidden sm:block lg:hidden`}>
          <div className={layoutConfigs[layout].tablet.gridClass}>
            {renderLogos(layoutConfigs[layout].tablet, sponsors)}
          </div>
        </div>
        
        {/* Mobile */}
        <div className={`${layoutConfigs[layout].mobile.containerClass} flex justify-center items-center sm:hidden`}>
          <div className={layoutConfigs[layout].mobile.gridClass}>
            {renderLogos(layoutConfigs[layout].mobile, sponsors)}
          </div>
        </div>
      </div>
    );
  };

const Sponsors: React.FC = () => {
  const sponsorsData: SponsorsData = sponsors;

  return (
    <div className="relative max-h-max sm:h-[1341px] bg-black text-white px-[22px] sm:px-[50px] lg:px-[122px] mt-32">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Header */}
        <div className="justify-center items-center mb-11 lg:flex sm:flex hidden">
          <h2 className='text-center'>
            Special Thanks To Our{' '}   
            <GlowingTextOrange className="font-bold">
                Sponsors And Partners
            </GlowingTextOrange>
          </h2>
        </div>
        
        {/* Mobile Header */}
        <div className="flex justify-center items-center mb-6 sm:hidden">
          <h2 className="text-[31px] text-center">
          Special Thanks To Our{' '}   
            <GlowingTextOrange className="font-bold">
                Sponsors And Partners
            </GlowingTextOrange>
          </h2>
        </div>

        {/* Sponsor Tiers - Now using the reusable component for each tier */}
        <SponsorTier 
          title="Platinum Sponsors" 
          sponsors={sponsorsData.platinum} 
          layout="platinum" 
        />
        
        <SponsorTier 
          title="Gold Sponsors" 
          sponsors={sponsorsData.gold} 
          layout="gold" 
        />
        
        {sponsorsData.silver.length > 0 && (
          <SponsorTier 
            title="Silver Sponsors" 
            sponsors={sponsorsData.silver} 
            layout="silver" 
          />
        )}
        
        <SponsorTier 
          title="Community Partners" 
          sponsors={sponsorsData.community} 
          layout="community" 
        />
      </div>
    </div>
  );
};
  
export default Sponsors;