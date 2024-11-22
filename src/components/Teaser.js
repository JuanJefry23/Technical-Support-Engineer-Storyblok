import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <h2 style={{ textAlign: "center", marginTop: "30px", fontSize:"2rem" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
