"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { speakers } from "@/data/index";
import Heading from "./Heading";

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
				className="absolute top-2/4 mt-24"
			/>
		</section>
	);
};

export default Speakers;
