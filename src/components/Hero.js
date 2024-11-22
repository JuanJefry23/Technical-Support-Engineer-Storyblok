import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="hero">
    <h1 className="hero__title">{ blok.title }</h1>
    <div className="hero__img">
        <img src={blok.image_background.filename} alt="Storyblok and React Tutorial" />
    </div>
  </div>
)

export default Hero;
