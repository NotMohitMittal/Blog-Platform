import BlurText from "./BlurText";




const PageHeading = () => {
    return (
        <BlurText
            text="Isn't this so cool?!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
        />
    );
};

export default PageHeading;
