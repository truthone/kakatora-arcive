import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Heading, Text, AspectRatio, Separator } from '@radix-ui/themes';
import ArticleRow from './ArticleRow';
import filmoDataByYear from '../data/filmoDataByYear.json'

function FilmoDetail() {
  const { id } = useParams();

  // filmoDataByYear에서 해당 id를 가진 작품 찾기
  const filmo = filmoDataByYear.filmo_data_by_year.flatMap(year => 
    [...(year.movies || []), ...(year.dramas || []), ...(year.musicals || []), ...(year.tv_appearances || [])]
  ).find(item => item.id === id);

  if (!filmo) return <Box p="4">필모를 찾을 수 없습니다.</Box>;

  return (
    <Box className="filmo-detail" p="4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Flex direction={{ initial: 'column', sm: 'row' }} gap="4">
        <Box style={{ flexBasis: '40%' }}>
          <AspectRatio ratio={2 / 3}>
            <img 
              src={`${process.env.PUBLIC_URL}${filmo.imgUrl}`} 
              alt={filmo.title} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </AspectRatio>
        </Box>
        
        <Box style={{ flexBasis: '60%' }}>
          <Heading size="8" mb="2">{filmo.title}</Heading>
          <Text as="p" size="2" mb="2">역할: {filmo.role}</Text>
          {filmo.note && <Text as="p" size="2" mb="2">비고: {filmo.note}</Text>}
          {filmo.broadcaster && <Text as="p" size="2" mb="2">방송사: {filmo.broadcaster}</Text>}
          {filmo.year && <Text as="p" size="2" mb="2">년도: {filmo.year}</Text>}
        </Box>
      </Flex>

      <Separator size="4" my="4" />

      {filmo.articles && filmo.articles.length > 0 && (
        <Box>
          <Heading size="6" mb="2">관련 기사</Heading>
          {filmo.articles.map((article, index) => (
            <ArticleRow key={index} article={article} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default FilmoDetail;