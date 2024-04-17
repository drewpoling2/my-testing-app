'use client';
/** @jsxImportSource theme-ui */

export default function Button() {
  return (
    <button
      sx={{
        backgroundColor: 'link',
        color: 'white',
        fontFamily: 'sans',
        borderRadius: 'sm',
        px: 6,
        py: 3,
        outline: 'none',
        borderWidth: '0px',
        fontWeight: 'bold',
        fontSize: 16,
        width: 'fit-content',
      }}
      onClick={() => console.log('hit')}
    >
      Themed button
    </button>
  );
}
