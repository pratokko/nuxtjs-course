export const useCart = () => useState(() => []);

export const useAuth = () => 
useState(() => ({
    isAuthenticated: false,
}));

export const usePagevisitCount = () => useState(() => 0)