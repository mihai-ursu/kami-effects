export default interface ChangeBackgroundColorOnScrollProps {
  children: React.ReactNode;
  initialColor: string;
  finalColor: string;
  percentageStart: number;
  percentageEnd: number;
}
