import { useContext, useState, useRef, useCallback } from 'react';
import { EpgContext } from '../context/epg';

export const useXScroll = () => {
  const scrollingRef = useRef(null);

  const onAssetFocus = useCallback(( attributes ) => {
    if (scrollingRef.current) {
      scrollingRef.current.scrollTo({
        left: attributes.x,
        behavior: 'smooth',
      });
    }
  }, [scrollingRef]);

  return { scrollingRef, onAssetFocus }
}


export const useMouseXScroll = (scrollRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const scrollX = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - scrollX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp }
}

export const useMouseYScroll = (scrollRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDownY = (e) => {

    setIsDragging(true);
    setStartY(e.pageY - scrollRef.current.offsetTop);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMoveY = (e) => {
    if (!isDragging) return;
    const y = e.pageY - scrollRef.current.offsetTop;
    const scrollY = y - startY;
    scrollRef.current.scrollTop = scrollTop - scrollY;
  };

  const handleMouseUpY = () => {
    setIsDragging(false);
  };

  return { handleMouseDownY, handleMouseMoveY, handleMouseUpY };
};