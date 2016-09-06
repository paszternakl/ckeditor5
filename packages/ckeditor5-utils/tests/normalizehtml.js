/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import normalizeHtml from '/ckeditor5/utils/normalizehtml.js';

describe( 'utils', () => {
	describe( 'normalizeHtml', () => {
		it( 'should sort attributes', () => {
			const actual = '<a style="border:1px;" class="" href="file://"></a>';
			const expected = '<a class="" href="file://" style="border:1px;"></a>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should normalize styles', () => {
			const actual = '<a style="border:1px"></a>';
			const expected = '<a style="border:1px;"></a>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should lowercase attributes', () => {
			const actual = '<A CLASS="" HREF="file://" STYLE="border:1px;"></A>';
			const expected = '<a class="" href="file://" style="border:1px;"></a>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should trim whitespace', () => {
			const actual = '<a class="  " href="file://"      style="border:  1px"></a>';
			const expected = '<a class="" href="file://" style="border:1px;"></a>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should remove empty style attribute', () => {
			const actual = '<a style=""></a>';
			const expected = '<a></a>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should leave empty class attribute', () => {
			const actual = '<p class=""></p>';
			const expected = '<p class=""></p>';

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );

		it( 'should not sort attribute value', () => {
			const actual = '<a class="b c a"></a>';
			const expected = actual;

			expect( normalizeHtml( actual ) ).to.equal( expected );
		} );
	} );
} );
