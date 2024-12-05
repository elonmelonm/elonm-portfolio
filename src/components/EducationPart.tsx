import ExperienceCard from "./ExperienceCard";
import { educations } from "../data/educations";


export default function EducationPart () {
    return (
        <div className="max-w-4xl mx-auto">
            {educations.map((educations, index) => (
                <ExperienceCard key={index} experience={educations} index={index} />
            ))}
        </div>
    )
}