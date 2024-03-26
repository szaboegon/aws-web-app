using Amazon.S3;
using Amazon.S3.Model;

namespace Shared.Services
{
    public class S3Service
    {
        private readonly IAmazonS3 _s3Client = new AmazonS3Client();

        public async Task<string[]> GeneratePresignedUrls(string[] images)
        {
            var presignedUrls = new List<string>();
            foreach (var imagePath in images)
            {
                var bucketName = imagePath.Split(":")[0];
                var key = imagePath.Split(":")[1];
                var request = new GetPreSignedUrlRequest
                {
                    BucketName = bucketName,
                    Key = key,
                    Verb = HttpVerb.GET,
                    Expires = DateTime.UtcNow.AddMinutes(60),
                };

                var presignedUrl = await _s3Client.GetPreSignedURLAsync(request);
                presignedUrls.Add(presignedUrl);
            }

            return presignedUrls.ToArray();
        }
    }
}
