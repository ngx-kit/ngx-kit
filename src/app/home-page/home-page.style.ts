import { Injectable } from '@angular/core';
import { ComponentStyle, defMerge, StyleDef, StylerService } from '@ngx-kit/styler';

@Injectable()
export class HomePageStyle implements ComponentStyle {
  constructor(private stylerService: StylerService) {
  }

  brand(): StyleDef {
    return {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#ccc',
      padding: [32, 0],
      margin: 0,
    }
  }

  footer(): StyleDef {
    return {
      color: '#ccc',
      textAlign: 'center',
      padding: [32, 16],
      $nest: {
        '& a': {
          color: '#aaa',
        },
      },
    }
  };

  host(): StyleDef {
    return {};
  }

  layoutContent(): StyleDef {
    return {
      display: 'block',
      background: '#222',
    };
  }

  panel(): StyleDef {
    return {
      display: 'block',
      borderRadius: 6,
      color: '#fff',
      margin: [0, 32],
      transition: 'all .3s',
      width: 200,
      height: 250,
      textDecoration: 'none',
      $nest: {
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    };
  }

  panelInfo(): StyleDef {
    return {
      display: 'block',
      fontSize: '.9rem',
      margin: [32, 0],
    };
  }

  panelKit(): StyleDef {
    return {
      ...this.panel(),
      background: 'linear-gradient(135deg, #0FD8DF 0%, #0fbac1 100%)',
      boxShadow: '1px 1px 35px 5px rgba(0,0,0,.8)',
    };
  }

  panelName(): StyleDef {
    return {
      fontSize: '1.3rem',
      fontWeight: 700,
    };
  }

  panelPkg(): StyleDef {
    return {
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, .6)',
    };
  }

  panelStyler(): StyleDef {
    const borderWidth = 3;
    return defMerge([
      this.panel(),
      {
        borderWidth,
        position: 'relative',
        background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationName: this.stylerService.keyframes({
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        }),
        backgroundSize: '300% 300%',
        $nest: {
          '&>span': {
            position: 'absolute',
            top: 3,
            right: 3,
            bottom: 3,
            left: 3,
            background: '#222',
            borderRadius: 6,
          },
        },
      },
    ]);
  }

  panelUi(): StyleDef {
    return {
      ...this.panel(),
      background: 'linear-gradient(135deg, #2B6DB7 0%,#155096 100%)',
      boxShadow: '1px 1px 35px 5px rgba(0,0,0,.8)',
    };
  }

  panelWrapper(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      padding: [32, 16],
    };
  }

  products(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: [64, 0],
    };
  }
}
