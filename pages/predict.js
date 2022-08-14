import Hero from "../components/Hero";
import AppLayout from "../components/layoutes/AppLayout";
import Production from "../components/Production";
import Sources from "../components/Sources";
import Started from "../components/Started";

export default function predict() {
  return (
    <AppLayout>
      {/* hero section  */}
      <Hero />
      {/* Sources section */}
      <Sources />
      {/* Production. section */}
      <Production />
      {/* startedsectio */}
      <Started />
    </AppLayout>   
  )
}