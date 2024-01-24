void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0.0 to 1.0)
    vec2 uv = fragCoord/iResolution.xy;
    
    // bg colour (gradient along y axis)
    vec3 col = vec3(.1, .7, 2);
    col += uv.y - 0.4;
    
    // tree
    vec2 tree_pos = uv - vec2(0.5, 0.65);
    
    // tree top
    float r = 0.18+0.1*cos(atan(tree_pos.y, tree_pos.x)*10.0 + 20.0*tree_pos.x + 1.0*tree_pos.y + + 1.0 );
    col *= smoothstep(r, r+0.005, length(tree_pos));

    // tree trunk
    r = 0.015;
    r += 0.002*cos(115.0*tree_pos.y);
    r += exp(-50.0*uv.y);
    col *= 1.0 - (1.0 - smoothstep(r, r+0.002, abs(tree_pos.x - 0.05*sin(2.0*tree_pos.y))))*(1.0-smoothstep(0.05, 0.051, tree_pos.y));
    
    // Output to screen
    fragColor = vec4(col,1.0);
}
