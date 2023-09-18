import EtherumIcon from 'assets/images/etherium-icon.svg'
import PolygonIcon from 'assets/images/polygon-icon.svg'
import SolanaIcon from 'assets/images/solanaIcon.svg'
import EtherumIconWhite from 'assets/images/etheriumIconWhite.svg'
import PolygonIconWhite from 'assets/images/polygonIconWhite.svg'
import SolanaIconWhite from 'assets/images/solanaIconWhite.svg'
import { BlockchainCardProps } from 'design-systems/Molecules/Cards/BlockchainCard/interface'

export const blockchainData: BlockchainCardProps[] = [
  {
    id: 1,
    name: 'Ethereum',
    image: EtherumIconWhite,
    imageWhite: EtherumIcon,
    height: 89,
    width: 53,
    widthMobile: 35,
    heightMobile: 58,
  },
  {
    id: 2,
    name: 'Solana',
    image: SolanaIconWhite,
    imageWhite: SolanaIcon,
    height: 82,
    width: 61,
    widthMobile: 54,
    heightMobile: 40,
  },
  {
    id: 3,
    name: 'Polygon',
    image: PolygonIconWhite,
    imageWhite: PolygonIcon,
    height: 86,
    width: 77,
    widthMobile: 56,
    heightMobile: 50,
  },
]
