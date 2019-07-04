export interface ThemeState {
  theme: string;
}

export const initialThemeState: ThemeState = {
  theme: "Light"
};

export function getInitialState(): ThemeState {
  return initialThemeState;
}
