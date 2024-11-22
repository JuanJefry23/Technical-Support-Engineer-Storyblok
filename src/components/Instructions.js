import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Instructions = ({ blok }) => (
    <div {...storyblokEditable(blok)} className="instructions">
        <div className="instructions__item instructions__item-padding">        
            <p>{blok.Instruction_l}</p>
        </div>
        <div className="instructions__item instructions__item-padding">
            <p>{blok.Instruction_ll}</p>
        </div>
        <div className="instructions__item">
            <iframe 
                height="315" 
                src="https://www.youtube.com/embed/lV_la5FRD8c?si=8VMe0IJMYF7RL1_m" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>        
        </div>
    </div>
)

export default Instructions;