import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {planetsData?.map((planet) => (
        <div key={planet?.name}>
          <Image
            src={planet?.images?.geology}
            alt={planet?.name}
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}
