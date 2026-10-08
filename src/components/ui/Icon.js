import {
  Award, Brain, Building2, Bus, Calculator, Cpu, FlaskConical, GraduationCap,
  Library, Medal, Monitor, Music, Palette, Presentation, Scale, School, Shield,
  Stethoscope, Trees, Trophy, Users, Waves,
} from "lucide-react";

const map = {
  Award, Brain, Building2, Bus, Calculator, Cpu, FlaskConical, GraduationCap,
  Library, Medal, Monitor, Music, Palette, Presentation, Scale, School, Shield,
  Stethoscope, Trees, Trophy, Users, Waves,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Award;
  return <Cmp {...props} />;
}
