import { Locality } from "@/types/locality";
import { create } from "zustand";


type UserLocality = {
	locality: {
		name: string;
		lat: string;
		lon: string;
	} | null;
	isAutoLocality: boolean;

	setLocality: (locality: { lat: string; lon: string, name: string } | null) => void;
	
}

export const useUserLocality = create<UserLocality>((set) => ({
	locality: null,
	isAutoLocality: true,
	setLocality: (locality) => set({ locality, isAutoLocality: false }),
}))