"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { speakers } from "@/data/index";
import Heading from "@/components/ui/heading";

const Speakers = () => {
	return (
		<section id="speakers" className="relative container">
			<LampContainer>
				<Heading text="Featured Speakers" />
			</LampContainer>
			<InfiniteMovingCards
				items={speakers}
				direction="right"
				speed="normal"
				className="max-w-full -mt-80 mb-32"
			/>
		</section>
	);
};

export default Speakers;
