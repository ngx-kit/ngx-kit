import { Inject, Injectable } from '@angular/core';
import { Style, StyleDef, StylerColorService, StylerDefService, StylerService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultSpinnerStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              private stylerService: StylerService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {
      display: 'inline-block',
    };
  }

  spinner(state: {
    size: number,
    duration: string,
    color: string,
    type: string,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(state.color || params.modules.spinner.color);
    const duration = state.duration || params.modules.spinner.duration;
    const size = state.size || params.modules.spinner.size;
    const border = Math.round(size / 5);
    const type = state.type || params.modules.spinner.type;
    return {
      display: 'inline-block',
      width: size,
      height: size,
      color: 'inherit',
      verticalAlign: 'middle',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      ...this.def.pick(type, {
        'spin-1': {
          border: [border, 'solid', 'transparent'],
          borderTopColor: color.background,
          borderRadius: '50%',
          position: 'relative',
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          }),
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          $nest: {
            '&:before': {
              content: '""',
              display: 'block',
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
              top: -border,
              left: -border,
              border: [border, 'solid', color.background],
              borderRadius: '50%',
              opacity: .5,
              boxSizing: 'border-box',
            },
          },
        },
        'spin-2': {
          border: [border, 'solid', 'transparent'],
          borderLeftColor: color.background,
          borderRightColor: color.background,
          borderRadius: '50%',
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          }),
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        },
        'spin-3': {
          border: [border, 'solid', color.background],
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          position: 'relative',
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          }),
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        },
        'ping-1': {
          border: [border, 'solid', color.background],
          borderRadius: '50%',
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'scale(0)',
              opacity: 0,
            },
            '50%': {
              opacity: 1,
            },
            '100%': {
              transform: 'scale(1)',
              opacity: 0,
            },
          }),
          animationTimingFunction: 'ease-out',
          animationIterationCount: 'infinite',
        },
        'ping-2': {
          backgroundColor: color.background,
          borderRadius: '50%',
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'scale(0)',
            },
            '100%': {
              transform: 'scale(1.0)',
              opacity: 0,
            },
          }),
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        },
        'tile-1': {
          backgroundColor: color.background,
          animationDuration: duration,
          animationName: this.stylerService.keyframes({
            '0%': {
              transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)',
            },
            '50%': {
              transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)',
            },
            '100%': {
              transform: 'transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
            },
          }),
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        },
        'tile-2': () => {
          const tile = (): Style => {
            const shadowSize = Math.round(size / 2);
            return {
              content: '""',
              display: 'block',
              position: 'absolute',
              backgroundColor: color.background,
              left: '50%',
              right: 0,
              top: 0,
              bottom: '50%',
              boxShadow: `-${shadowSize}px 0 0 ${color.background}`,
              animationDuration: duration,
              animationName: this.stylerService.keyframes({
                '0%, 100%': {
                  boxShadow: `-${shadowSize}px 0 0 transparent`,
                  backgroundColor: color.background,
                },
                '50%': {
                  boxShadow: `-${shadowSize}px 0 0 ${color.background}`,
                  backgroundColor: 'transparent',
                },
              }),
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            };
          };
          return {
            position: 'relative',
            $nest: {
              '&:before': tile(),
              '&:after': {
                ...tile(),
                top: '50%',
                bottom: 0,
                animationDelay: '.25s',
              },
            },
          };
        },
      }),
//      border: ['.2em', 'dotted', color],
//      borderRadius: '50%',
//      animation: '1s loader-01 linear infinite',
//      animationDuration: '1s',
//      animationName: this.stylerService.keyframes({
//        '0%': {
//          transform: 'rotate(0deg)',
//        },
//        '100%': {
//          transform: 'rotate(360deg)',
//        },
//      }),
//      animationTimingFunction: 'linear',
//      animationIterationCount: 'infinite',
    };
  }
}
