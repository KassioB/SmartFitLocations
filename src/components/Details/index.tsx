import { Location } from "../../App";

import RequiredMask from '../../assets/required-mask.png';
import RecommendedMask from '../../assets/recommended-mask.png';
import RequiredTowel from '../../assets/required-towel.png';
import RecommendedTowel from '../../assets/recommended-towel.png';
import PartialFountain from '../../assets/partial-fountain.png';
import ForbiddenFountain from '../../assets/forbidden-fountain.png';
import RequiredLockerroom from '../../assets/required-lockerroom.png';
import PartialLockerroom from '../../assets/partial-lockerroom.png';
import ForbiddenLockerroom from '../../assets/forbidden-lockerroom.png';

type DetailsProps = {
  locations: Location[];
  show: boolean;
};

export function Details({ locations, show }: DetailsProps) {
  if (!show) return null;

  if (locations.length === 0) {
    return <p className="mt-6 text-center text-sm">Nenhuma unidade encontrada.</p>;
  }

  const getMaskImage = (type: string) =>
    type === "required" ? RequiredMask : RecommendedMask;

  const getTowelImage = (type: string) =>
    type === "required" ? RequiredTowel : RecommendedTowel;

  const getFountainImage = (type: string) =>
    type === "partial" ? PartialFountain : ForbiddenFountain;

  const getLockerroomImage = (type: string) => {
    if (type === "allowed") return RequiredLockerroom;
    if (type === "partial") return PartialLockerroom;
    return ForbiddenLockerroom;
  };

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((loc) => {
        const maskImg = getMaskImage(loc.mask);
        const towelImg = getTowelImage(loc.towel);
        const fountainImg = getFountainImage(loc.fountain);
        const lockerImg = getLockerroomImage(loc.locker_room);

        return (
          <div key={loc.id} className="p-4  bg-gray-100 border border-gray-200 rounded ">
            <p className="text-green-600">
              {loc.opened ? "Aberta" : "Fechada"}
            </p>
            <h3 className="text-lg">{loc.title}</h3>

            <div className="text-[0.65rem]" dangerouslySetInnerHTML={{ __html: loc.content }} />
            <hr className="my-2 border-1 border-gray-200" />

            <div className="mt-4 flex flex-wrap gap-2">
              {[maskImg, towelImg, fountainImg, lockerImg].map((img, idx) => (
                <img key={idx} src={img} alt="Permissão" className="w-9" />
              ))}
            </div>

            <div className="mt-4">
              <p className="mb-1"></p>
              <ul className="text-sm space-y-1">
                {loc.schedules.map((s, idx) => (
                  <li key={idx}>
                    {s.weekdays}: {s.hour}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
