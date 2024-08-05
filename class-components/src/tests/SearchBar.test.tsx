import SearchBar from '../components/SearchBar/SearchBar.tsx';
import { fireEvent, render, screen } from '@testing-library/react';

vi.mock('next/navigation', () => {
    return {
        __esModule: true,
        usePathname: () => ({
            pathname: '',
        }),
        useRouter: () => ({
            push: vi.fn(),
            replace: vi.fn(),
            prefetch: vi.fn(),
        }),
        useSearchParams: () => ({
            get: () => {},
        }),
    };
});

afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
});

describe('SearchBar Component test', () => {
    beforeAll(() => {
        vi.mock('next/router', () => require('next-router-mock'));
    });
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
    });
    test('Renders the SearchBar component', () => {
        render(<SearchBar />);

        expect(screen.getByPlaceholderText('Input Character Name')).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
        expect(screen.getByText('Error!')).toBeInTheDocument();
    });

    test('handles input change', () => {
        render(<SearchBar />);

        const inputElement = screen.getByPlaceholderText('Input Character Name');
        fireEvent.change(inputElement, { target: { value: 'Rick' } });

        expect(inputElement).toHaveValue('Rick');
    });
});
