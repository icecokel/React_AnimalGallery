const GridItemUtil = {
  createStyle: (height: number, width: number) => {
    return {
      gridRow: "span " + height,
      gridColumn: "span " + width,
    };
  },
};

export default GridItemUtil;
