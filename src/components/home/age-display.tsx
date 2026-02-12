"use client";

interface IAgeDisplayProps {
  birthDate: Date;
}

const NOW = Date.now();

export default function AgeDisplay(props: IAgeDisplayProps) {
  const {birthDate} = props;
  const age = new Date(NOW - birthDate.getTime()).getUTCFullYear() - 1970;

  return <span>{age}yo software engineer</span>;
}
