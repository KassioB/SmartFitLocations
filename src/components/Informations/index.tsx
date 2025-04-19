import RequiredMask from '../../assets/required-mask.png';
import RecommendedMask from '../../assets/recommended-mask.png';
import RequiredTowel from '../../assets/required-towel.png';
import RecommendedTowel from '../../assets/recommended-towel.png';
import PartialFountain from '../../assets/partial-fountain.png';
import ForbiddenFountain from '../../assets/forbidden-fountain.png';
import RequiredLockerroom from '../../assets/required-lockerroom.png';
import PartialLockerroom from '../../assets/partial-lockerroom.png';
import ForbiddenLockerroom from '../../assets/forbidden-lockerroom.png';

export function Informations() {
    return (
      <div className="mt-10 mb-10 p-5 bg-gray-100 rounded-lg max-w-5xl mx-auto">
        <div className="flex w-full justify-between text-center gap-4">
  
          <div className="flex flex-col items-center flex-1">
            <p className="mb-2 text-sm ">Máscara</p>
            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <img className="w-10" src={RequiredMask} alt="Máscara obrigatória" />
                <span className="text-xs mt-1">Obrigatório</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10" src={RecommendedMask} alt="Máscara recomendada" />
                <span className="text-xs mt-1">Recomendado</span>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm">Toalha</p>
            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <img className="w-10" src={RequiredTowel} alt="Toalha obrigatória" />
                <span className="text-xs mt-1">Obrigatório</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10" src={RecommendedTowel} alt="Toalha recomendada" />
                <span className="text-xs mt-1">Recomendado</span>
              </div>
            </div>
          </div>
  
          <div className="flex-col items-center">
            <p className="mb-2 text-sm">Bebedouro</p>
            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <img className="w-10" src={PartialFountain} alt="Bebedouro parcial" />
                <span className="text-xs mt-1">Parcial</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10" src={ForbiddenFountain} alt="Bebedouro proibido" />
                <span className="text-xs mt-1">Proibido</span>
              </div>
            </div>
          </div>
  
          <div className="flex-col items-center">
            <p className="mb-2 text-sm ">Vestiários</p>
            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <img className="w-10" src={RequiredLockerroom} alt="Vestiário liberado" />
                <span className="text-xs mt-1">Liberado</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10" src={PartialLockerroom} alt="Vestiário parcial" />
                <span className="text-xs mt-1">Parcial</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-10" src={ForbiddenLockerroom} alt="Vestiário fechado" />
                <span className="text-xs mt-1">Fechado</span>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  