import HeaderPage from '@/components/Header/HeaderPage';
import HomePage from '@/components/Home/HomePage';
import '@/styles/globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { SignIn, UserButton } from '@clerk/clerk-react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<ClerkProvider>
				<SignedIn>
					<Component {...pageProps} />
				</SignedIn>
				<SignedOut>
					<Box
						w={'full'}
						h={'650px'}
						position={'relative'}
						zIndex={50}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<SignIn />
					</Box>
					<Box w={'full'} position={'absolute'} top={0} left={0} zIndex={10}>
						<HomePage />
					</Box>
				</SignedOut>
			</ClerkProvider>
		</ChakraProvider>
	);
}
