import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;

/*

In the line 4, '{...storyblokEditable(blok)}' which is imported from the library "@storyblok/react" is the responsible to allow/enable us
to edit this component on the visual editor.


*/