
export const getPatronExtraerSrc = (): RegExp =>{
    return  /<img\b[^>]*\bsrc=["']([^"']+)["']/g;
}

export const getPatronValidacionUrl = (): RegExp => {
      return /https?:\/\/[^\s]+\/[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]{2,})?/g;
  };