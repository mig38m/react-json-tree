import solarized from './themes/solarized';
import { createStyling } from 'react-base16-styling';

const colorMap = theme => ({
  BACKGROUND_COLOR: theme.base00,
  TEXT_COLOR: theme.base07,
  STRING_COLOR: theme.base0B,
  DATE_COLOR: theme.base0B,
  NUMBER_COLOR: theme.base09,
  BOOLEAN_COLOR: theme.base09,
  NULL_COLOR: theme.base08,
  UNDEFINED_COLOR: theme.base08,
  FUNCTION_COLOR: theme.base08,
  SYMBOL_COLOR: theme.base08,
  LABEL_COLOR: theme.base0D,
  ARROW_COLOR: theme.base0D,
  ITEM_STRING_COLOR: theme.base0B,
  ITEM_STRING_EXPANDED_COLOR: theme.base03
});

const getDefaultThemeStyling = theme => {
  const colors = colorMap(theme);

  return {
    tree: {
      border: 0,
      padding: 0,
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 2,
      marginRight: 0,
      fontSize: '0.90em',
      listStyle: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      backgroundColor: colors.BACKGROUND_COLOR
    },

    value: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 0,
      marginLeft: 14,
      WebkitUserSelect: 'text',
      MozUserSelect: 'text'
    },

    valueLabel: {
      display: 'inline-block',
      marginRight: 5,
      color: colors.LABEL_COLOR
    },

    valueText: {},

    'valueText--String': {
      color: colors.STRING_COLOR
    },

    'valueText--Date': {
      color: colors.DATE_COLOR
    },

    'valueText--Number': {
      color: colors.NUMBER_COLOR
    },

    'valueText--Boolean': {
      color: colors.BOOLEAN_COLOR
    },

    'valueText--Null': {
      color: colors.NULL_COLOR
    },

    'valueText--Undefined': {
      color: colors.UNDEFINED_COLOR
    },

    'valueText--Function': {
      color: colors.FUNCTION_COLOR
    },

    'valueText--Symbol': {
      color: colors.SYMBOL_COLOR
    },

    itemRange: {
      margin: '8px 0 8px 14px',
      cursor: 'pointer',
      display: 'inline-block',
      marginRight: 5,
      color: colors.LABEL_COLOR
    },

    arrow: ({ style }, opened) => ({
      style: {
        ...style,
        display: 'inline-block',
        marginLeft: 0,
        marginTop: 8,
        'float': 'left',
        transition: '150ms',
        WebkitTransition: '150ms',
        MozTransition: '150ms',
        WebkitTransform: opened ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
        MozTransform: opened ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
        transform: opened ? 'rotateZ(0deg)' : 'rotateZ(-90deg)',
        position: 'relative'
      }
    }),

    arrowContainer: ({ style }, double) => ({
      style: {
        ...style,
        display: 'inline-block',
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: double ? 10 : 5,
        paddingLeft: double ? 10 : 5,
        cursor: 'pointer'
      }
    }),

    arrowSign: {
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTopWidth: 5,
      borderTopStyle: 'solid',
      borderTopColor: colors.ARROW_COLOR
    },

    arrowSignInner: {
      position: 'absolute',
      top: 0,
      left: -5
    },

    nestedNode: {
      position: 'relative',
      paddingTop: 3,
      paddingBottom: 3,
      marginLeft: 14
    },
    nestedNodeLabel: {
      margin: 0,
      padding: 0,
      display: 'inline-block',
      cursor: 'pointer',
      color: colors.LABEL_COLOR
    },

    nestedNodeItemString: ({ style }, expanded) => ({
      style: {
        ...style,
        cursor: 'default',
        color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
      }
    }),

    nestedNodeItemType: {
      marginLeft: 5,
      marginRight: 5
    },

    nestedNodeChildren: ({ style }, expanded) => ({
      style: {
        ...style,
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: expanded ? 'block' : 'none'
      }
    })
  };
};

export default createStyling({
  getStylingFromBase16: getDefaultThemeStyling,
  defaultBase16: solarized
});
