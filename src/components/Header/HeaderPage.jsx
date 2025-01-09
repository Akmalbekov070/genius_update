'use client';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function HeaderPage() {
	return (
		<Box w={'full'} h={24} bg={'blue.600'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={20}>
			{/* left header  */}
			<HStack>
				<Image
					w={24}
					src='https://i.postimg.cc/SxydV0n1/removal-ai-e2c59107-02d4-4e7b-a4bc-dd5d9d16f024-photo-2024-11-04-10-22-39.png'
					alt='Image Genius'
				/>
				<Text w={'100px'} fontStyle={'-moz-initial'} fontFamily={'mono'} fontSize={'xl'}>
					Genius Academy
				</Text>
			</HStack>
		</Box>
	);
}
