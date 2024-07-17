import { Box, Heading, Flex, AspectRatio, Card, Text, Container } from '@radix-ui/themes';
import useYouTubeVideos from '../hooks/useYouTubeVideos'

function YouTubeRow({ movieTitle,  playlistId}) {
  const videos = useYouTubeVideos(playlistId);

  const openYouTubeVideo = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank');
  };

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       // const response = await fetch(
  //       //   `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
  //       //     movieTitle
  //       //   )}&type=video&maxResults=10&key=${apiKey}`
  //       // );
  //       const response = await fetch(
  //         `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${apiKey}`
  //       );
  //       const data = await response.json();
  //       console.log(data)
  //       setVideos(data.items);
  //     } catch (error) {
  //       console.error('Error fetching YouTube videos:', error);
  //     }
  //   };

  //   fetchVideos();
  // }, [movieTitle]);
  
  return (
    <Box my="6">
      <Container>
        <Heading size="6" mb="4">관련 동영상</Heading>
        <Flex gap="3" style={{ overflowX: 'auto' }}>
          {videos?.map((video) => (
            <Card 
              key={video.id.videoId} 
              style={{ width: '250px', flexShrink: 0, pointer: 'cursor' }} 
              onClick={() => openYouTubeVideo(video.snippet.resourceId.videoId)}
            >
              <AspectRatio ratio={16/9}>
                <img 
                  src={video.snippet.thumbnails.medium.url} 
                  alt={video.snippet.title} 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </AspectRatio>
              <Box p="2">
                <Text size="2" weight="bold">{video.snippet.title}</Text>
              </Box>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default YouTubeRow;