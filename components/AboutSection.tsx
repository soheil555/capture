import { About, Description, Hide, Image } from "./Styles";

export default function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>

          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>

          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>

      <Image>
        <img src="/images/home1.png" />
      </Image>
    </About>
  );
}
