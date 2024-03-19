import {
  BackgroundImage,
  Button,
  Flex,
  Overlay,
  Paper,
  Title,
} from "@mantine/core";
import HeroImage from "../assets/hero-img.jpg";

interface IHeroSectionProps {}
export const HeroSection: React.FC<IHeroSectionProps> = () => {
  return (
    <>
      <div style={{ position: "relative", height: "600px" }}>
        <BackgroundImage
          src={HeroImage}
          w={"100%"}
          h={"100%"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Overlay color="#000" backgroundOpacity={0.1} style={{ zIndex: 1 }} />
          <Flex justify="start" w={"50%"}>
            <Paper
              w={"350px"}
              p={"xl"}
              style={{
                display: "flex",
                flexDirection: "column",
                zIndex: 2,
              }}
            >
              <Title size={"42px"}>Browse. Sell. Rediscover.</Title>
              <Button
                size="lg"
                w={"100%"}
                mt={"10px"}
                component="a"
                href="/sell"
              >
                Create listing
              </Button>
            </Paper>
          </Flex>
        </BackgroundImage>
      </div>
    </>
  );
};
