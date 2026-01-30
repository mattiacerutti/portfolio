"use client";

interface IAgeDisplayProps {
  birthDate: Date;
}

export default function AgeDisplay(props: IAgeDisplayProps) {
  const {birthDate} = props;

  const age = new Date(Date.now() - birthDate.getTime()).getUTCFullYear() - 1970;

  return <span>{age}yo software engineer</span>;
}
