import React, { useState, useEffect } from 'react';
import './Photos.css'
import { PhotoData } from './photosData';
import { Row, Col, Modal, Button } from 'antd'
import { motion, useScroll } from 'framer-motion'
import { DownloadOutlined, CloseOutlined } from '@ant-design/icons';
import { 
  LOAD_MORE_PHOTOS_COUNT, 
  INITIAL_PHOTOS_COUNT, 
  IMAGE_PROMPT_TIMEOUT,
  ANIMATION_DURATIONS 
} from '../constants';

export default function Photos() {
  const [visibleModalIndex, setVisibleModalIndex] = useState(null);
  const [loadedImagesCount, setLoadedImagesCount] = useState(INITIAL_PHOTOS_COUNT);
  const [imagePromptVisible, setImagePromptVisible] = useState(true);

  useEffect(() => {
    if (imagePromptVisible) {
      const timer = setTimeout(() => {
        setImagePromptVisible(false);
      }, IMAGE_PROMPT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [imagePromptVisible]);

  const showModal = (index) => {
    setVisibleModalIndex(index);
    setImagePromptVisible(false);
  };

  const handleCancelModal = () => {
    setVisibleModalIndex(null);
  };

  const loadMoreImages = () => {
    setLoadedImagesCount(prevCount => 
      Math.min(prevCount + LOAD_MORE_PHOTOS_COUNT, PhotoData.length)
    );
  };

  return (
    <motion.div 
      className="page-container" 
      initial={{opacity: 0, y: 2}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: ANIMATION_DURATIONS.MEDIUM}}
    >
      {imagePromptVisible && (
        <motion.div 
          className="image-open-prompt"
          initial={{ opacity: 1 }} 
          animate={{ opacity: 0 }} 
          transition={{ delay: 2, duration: 1 }}
          onAnimationComplete={() => setImagePromptVisible(false)}
        >
          Tap an image to open.
        </motion.div>
      )}
      <Row gutter={[16, 16]} justify="center" className="photos-grid-row">
        {PhotoData.slice(0, loadedImagesCount).map((item, index) => (
          <Col key={item.id || index} xs={24} sm={12} md={8} lg={6} className="photo-item-col">
            <motion.div 
              className="photo-card" 
              onClick={() => showModal(index)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={item.item} alt={item.date || `Photo ${index + 1}`} className="photo-image-preview" loading='lazy'/>
              {item.date && <div className="photo-date-overlay">{item.date}</div>}
            </motion.div>
          </Col>
        ))}
      </Row>
      {loadedImagesCount < PhotoData.length && (
        <Row justify="center" style={{ marginTop: '30px', marginBottom: '20px' }}>
          <Col style={{ textAlign: 'center' }}>
            <motion.div 
              onViewportEnter={loadMoreImages} 
              style={{height: '1px', width: '100%', position: 'relative', bottom: '100px'}} 
            /> 
            <Button onClick={loadMoreImages} type="dashed">
              Load More Photos
            </Button>
          </Col>
        </Row>
      )}
      {visibleModalIndex !== null && PhotoData[visibleModalIndex] && (
        <Modal
          open={visibleModalIndex !== null}
          onCancel={handleCancelModal}
          footer={null}
          centered
          width="auto"
          destroyOnClose={true}
          maskClosable={true}
          styles={{
            body: { 
              padding: 0, 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center' 
            },
            content: {
              backgroundColor: '#1f2937',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              padding: '20px',
              width: 'max-content',
              maxWidth: '90vw',
            }
          }}
          closeIcon={
            <CloseOutlined 
              style={{
                color: '#fff', 
                fontSize: '24px', 
                background: 'rgba(0,0,0,0.6)', 
                borderRadius: '50%', 
                padding: '8px', 
                position: 'fixed', 
                top: '20px', 
                right: '20px', 
                zIndex: 1051
              }}
            />
          }
        >
          <img
            src={PhotoData[visibleModalIndex].item}
            alt={PhotoData[visibleModalIndex].date || `Full size photo ${visibleModalIndex + 1}`}
            className="photo-modal-image"
          />
          {(PhotoData[visibleModalIndex].date || PhotoData[visibleModalIndex].item) && (
            <div className="photo-modal-info">
              {PhotoData[visibleModalIndex].date && <p>{PhotoData[visibleModalIndex].date}</p>}
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                href={PhotoData[visibleModalIndex].item}
                target="_blank"
                download={`photo-${PhotoData[visibleModalIndex].date || visibleModalIndex + 1}.jpg`}
                className="download-button"
              >
                Download
              </Button>
            </div>
          )}
        </Modal>
      )}
      <Row justify="center" style={{marginTop: '40px', paddingBottom: '20px'}}>
        <Col>
          <h6 className="photos-count-footer">{PhotoData.length} Pictures | 0 Videos</h6>
        </Col>
      </Row>
    </motion.div>
  );
}

